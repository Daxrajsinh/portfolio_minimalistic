function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const words = ["Coder", "Open Source Contributor", "Web Developer", "Student"];
let wordIndex = 0;
const animatedWordElement = document.getElementById("animated-word");

function changeWord() {
  animatedWordElement.style.animation = 'none'; 
  setTimeout(() => {
    animatedWordElement.textContent = words[wordIndex];
    animatedWordElement.style.animation = '';
    wordIndex = (wordIndex + 1) % words.length;
  }, 100); // Delay to ensure reset takes effect
}

setInterval(changeWord, 2000);

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', function() {
  if(this.checked) {
    enableDarkTheme();
  } else {
    disableDarkTheme();
  }
});
