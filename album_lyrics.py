"""
Grab every song's lyrics from a Genius album and dump them into a .txt file.

Setup (one time):
    pip install lyricsgenius
    Get a free Genius API token at https://genius.com/api-clients
    Either:
      - export GENIUS_TOKEN="your_token_here"
      - or paste it into the GENIUS_TOKEN variable below.

Usage:
    python album_lyrics.py "https://genius.com/albums/Artist/Album-name"
    python album_lyrics.py "Album Name" "Artist Name"
"""

import os
import re
import sys
from pathlib import Path

import lyricsgenius

GENIUS_TOKEN = os.environ.get("GENIUS_TOKEN", "10B33PxIcdk4vVahEdYRYwyhjOqXv32FalaSPerRUhEmsC5jljODphG7RugPOES0IWS1syBTdBd16vOG3XC-eA")  # or hardcode your token here


def slugify(s) -> str:
    if isinstance(s, dict):
        s = s.get("name") or s.get("title") or str(s)
    elif hasattr(s, "name"):
        s = s.name
    return re.sub(r"[^A-Za-z0-9._-]+", "_", str(s)).strip("_")


def name_of(s) -> str:
    if isinstance(s, dict):
        return s.get("name") or s.get("title") or str(s)
    if hasattr(s, "name"):
        return s.name
    return str(s)


def fetch_album(genius: lyricsgenius.Genius, arg1: str, arg2: str | None):
    if arg1.startswith("http"):
        # search_album works by name; for a URL we parse it
        # URL form: https://genius.com/albums/<artist-slug>/<album-slug>
        parts = arg1.rstrip("/").split("/")
        album_slug = parts[-1].replace("-", " ")
        artist_slug = parts[-2].replace("-", " ")
        return genius.search_album(album_slug, artist_slug)
    return genius.search_album(arg1, arg2 or "")


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    if not GENIUS_TOKEN:
        print("ERROR: set GENIUS_TOKEN env var or hardcode it in the script.")
        sys.exit(1)

    genius = lyricsgenius.Genius(
        GENIUS_TOKEN,
        skip_non_songs=True,
        excluded_terms=["(Remix)", "(Live)"],
        remove_section_headers=False,
        timeout=15,
        retries=3,
    )
    genius.verbose = True

    arg1 = sys.argv[1]
    arg2 = sys.argv[2] if len(sys.argv) > 2 else None

    album = fetch_album(genius, arg1, arg2)
    if album is None:
        print("Album not found.")
        sys.exit(1)

    artist_name = name_of(album.artist)
    album_name = name_of(album.name) if not isinstance(album.name, str) else album.name
    out_name = f"{slugify(artist_name)}__{slugify(album_name)}.txt"
    out_path = Path(out_name)

    with out_path.open("w", encoding="utf-8") as f:
        f.write(f"{album_name}\nby {artist_name}\n")
        f.write("=" * 60 + "\n\n")

        for i, track in enumerate(album.tracks, start=1):
            # track may be a (number, Song) tuple or a Track object with .song
            if isinstance(track, tuple):
                song = track[1]
            else:
                song = getattr(track, "song", track)
            title = name_of(song.title) if not isinstance(song.title, str) else song.title
            lyrics = song.lyrics or "[no lyrics found]"
            f.write(f"\n\n{'#' * 60}\n")
            f.write(f"Track {i}: {title}\n")
            f.write("#" * 60 + "\n\n")
            f.write(lyrics)
            f.write("\n")

    print(f"\nSaved {len(album.tracks)} tracks to {out_path.resolve()}")


if __name__ == "__main__":
    main()
