// Array of texts to show
const texts = ["Innovator.", "Creator.", "Student.", "Designer.", "Developer.", "Brother.", "Curious.", "Seventeen.", "Unique.", "Black.", "Car Lover.", "Computer Lover.", "Tech Enthusiast.", "Graphic Designer."];

// Select element by class
const textElement = document.querySelector(".top2");

let index = 0;
const body = document.querySelector(".intro");
const topSection = document.querySelector(".top");
const top2 = document.querySelector(".top2");
const divbottom = document.querySelector(".divbottom");
const gifcover = document.querySelector(".gifcover");
const gifcover2 = document.querySelector(".gifcover");
const cell = document.querySelector(".cell");
const twntyfour = document.querySelector(".twentyfour");
const imgwrapper9 = document.querySelector(".img-wrapper9");
const imgwrapper10 = document.querySelector(".img-wrapper10");
const imgwrapper7 = document.querySelector(".img-wrapper7");
const imgwrapper8 = document.querySelector(".img-wrapper8");


function changeText() {
  index = (index + 1) % texts.length;
  textElement.textContent = texts[index];

  // imgwrapper9.style.borderColor = index % 2 === 0 ? "white" : "black";

  // imgwrapper10.style.borderColor = index % 2 === 0 ? "black" : "white";
}

setInterval(changeText, 500);
changeText();

const black = document.querySelector('.black');
const white = document.querySelector('.white');
const whiteGradient = document.querySelector('.white-gradient');

let step = 0;

function toggleColors() {
  const cellGradient = cell.querySelector('.cell-gradient');

  if (step % 2 === 0) {
    // 🌞 Light mode
    white.style.backgroundColor = "white";
    black.style.backgroundColor = "black";
    if (whiteGradient) {
      whiteGradient.style.background =
        "linear-gradient(to bottom, rgba(255,255,255,0) 80%, rgba(0,0,0,1) 100%)";
    }
    if (cellGradient) {
      cellGradient.style.background =
        "linear-gradient(to bottom, rgba(255,255,255,0) 80%, rgba(255,255,255,1) 100%)";
    }

  } else {
    // 🌚 Dark mode
    white.style.backgroundColor = "black";
    black.style.backgroundColor = "white";
    if (whiteGradient) {
      whiteGradient.style.background =
        "linear-gradient(to bottom, rgba(0,0,0,0) 80%, rgba(255,255,255,1) 100%)";
    }
    if (cellGradient) {
      cellGradient.style.background =
        "linear-gradient(to bottom, rgba(0,0,0,0) 80%, rgba(0,0,0,1) 100%)";
    }
  }

  const top6 = document.querySelector('.top6'); 
const top7 = document.querySelector('.top7');
const top8 = document.querySelector('.top8');
const scratchP = document.querySelector('.white p');

if (step % 2 === 0) {
  // 🌞 Light background — restore original CSS colors
  if (top6) top6.style.color = ""; // resets to stylesheet value
  // if (top7) top7.style.color = "";
  if (scratchP) scratchP.style.color = "";
} else {
  // 🌚 Dark background — make text white for visibility
  if (top6) top6.style.color = "white";
  // if (top7) top7.style.color = "white";
  if (scratchP) scratchP.style.color = "white";
}
const whiteSection = document.querySelector('.white');
if (whiteSection) {
  whiteSection.style.borderTop = step % 2 === 0 ? "5px solid black" : "5px solid white";
}

 imgwrapper9.style.borderColor = step % 2 === 0 ? "white" : "black";
 imgwrapper10.style.boxSh

 top8.style.color = step % 2 === 0 ? "white" : "black";
 top8.style.textShadow = step % 2 === 0 ? "0 0 10px rgba(0, 0, 0, 0.5)" : "0 0 10px rgba(255, 255, 255, 0.5)";

imgwrapper10.style.borderColor = step % 2 === 0 ? "white" : "black";
imgwrapper7.style.borderColor = step % 2 === 0 ? "black" : "white";

  step++;
}


// Run every 2 seconds (adjust as needed)
setInterval(toggleColors, 2000);

// Run once immediately
toggleColors(); // Initial call to set the first text

window.addEventListener("scroll", () => {
  const intro = document.querySelector(".intro");
  if (!intro) return;

  // Get scroll position
  const scrollY = window.scrollY;

  // Parallax effect: the 0.5 makes it move slower than the scroll
  intro.style.backgroundPosition = `center ${scrollY * 0.5}px`;
  gifcover.style.backgroundPosition = `center ${scrollY * 0.5}px`;
  gifcover2.style.backgroundPosition = `center ${scrollY * 0.5}px`;

  const cell = document.querySelector(".cell");
  if (cell) {
    const rect = cell.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate scroll progress through the viewport (0 at top, 1 at bottom)
    const progress = (rect.top + rect.height / 2 - windowHeight / 2) / windowHeight;

    // Move only slightly around center
    const offset = progress * 50; // adjust 50 → smaller number for subtler motion
    cell.style.backgroundPosition = `center calc(50% + ${offset}px)`;

  }
});

const font = ["Campton, sans-serif", "Modern1, sans-serif"];
const bgoptacity = ["Campton, sans-serif", "Modern1, sans-serif"];
let inde2 = 0;



async function changeFont() {

  while (true) {
    body.style.backgroundImage = "url('testbackdrop2.png')";

    gifcover.style.opacity = "0%";
    body.style.color = "white";
    body.style.fontFamily = "Campton, sans-serif";
    topSection.style.textShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    top2.style.textShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    divbottom.style.textShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    await sleep(4000);
    gifcover.style.opacity = "100%";
    body.style.fontFamily = "Modern1, sans-serif";
    topSection.style.textShadow = "none";
    top2.style.textShadow = "none";
    divbottom.style.textShadow = "none";
    await sleep(4000);
    body.style.backgroundImage = "none";
    gifcover.style.opacity = "0%";
    body.style.color = "black";
    await sleep(4000);
  }
}

changeFont(); // Initial call to set the first text


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


document.addEventListener("DOMContentLoaded", function () {
  // Select the container
  const scrollwheel = document.querySelector('.scrollwheel');

  // Get all the items to be scrolled
  const items = scrollwheel.querySelectorAll('.OSentity');

  // Duplicate each item and add it to the end of the container
  const repeatCount = 10;

  for (let i = 0; i < repeatCount; i++) {
    items.forEach(item => {
      const clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden', true); // Hide clones from screen readers
      scrollwheel.appendChild(clone);
    });
  }
});