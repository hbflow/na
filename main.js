// Array of texts to show
const texts = ["Innovator.", "Creator.", "Designer.", "Developer."];

// Select element by class
const textElement = document.querySelector(".top2");

let index = 0;

function changeText() {
  index = (index + 1) % texts.length;
  textElement.textContent = texts[index];
}

setInterval(changeText, 900);
changeText(); // Initial call to set the first text

window.addEventListener("scroll", () => {
  const intro = document.querySelector(".intro");
  if (!intro) return;

  // Get scroll position
  const scrollY = window.scrollY;

  // Parallax effect: the 0.5 makes it move slower than the scroll
  intro.style.backgroundPosition = `center ${scrollY * 0.5}px`;
});

const font = ["Campton, sans-serif", "Modern1, sans-serif"];
const bgoptacity = ["Campton, sans-serif", "Modern1, sans-serif"];
let inde2 = 0;

const body = document.querySelector(".intro");
const top = document.querySelector(".top");
const top2 = document.querySelector(".top2");
const divbottom = document.querySelector(".divbottom");

async function changeFont() {
  
  while (true) {
    body.style.fontFamily = "Campton, sans-serif";
    top.style.textShadow = "none";
    await sleep(2000); 
    body.style.fontFamily = "Modern1, sans-serif";
    top.style.textShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    await sleep(2000); 
  }
}

changeFont(); // Initial call to set the first text
 

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}