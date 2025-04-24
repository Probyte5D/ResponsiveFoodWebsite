// Sezione per la gestione del cambio dello sfondo nella prima sezione
const backgrounds = [
  "url('../images/restaurant-background-2.png')",
  "url('../images/immagine2.png')",
  "url('../images/immagine.png')",
  "url('../images/immagine3.png')"
];

let backgroundIndex = 0;
const section = document.querySelector('.section-1');

setInterval(() => {
  section.style.backgroundImage = `
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.575)),
    ${backgrounds[backgroundIndex]}
  `;

  backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
}, 4000);

// Sezione per la gestione del cambio dei testi visibili nella prima sezione
const texts = document.querySelectorAll('.section-1-Text .text-item');
let i = 0;

setInterval(() => {
  const currentText = document.querySelector('.section-1-Text .text-item.change');

  if (currentText) {
    currentText.classList.remove('change');

    if (i >= texts.length) {
      texts[0].classList.add('change');
      i = 0;
    } else {
      texts[i].classList.add('change');
      i++;
    }
  }
}, 4000);

// Sezione per nascondere o mostrare la navbar durante lo scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = "0";
  }

  lastScroll = currentScroll;
});
