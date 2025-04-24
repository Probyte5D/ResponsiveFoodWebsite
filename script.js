// Sezione per la gestione dello sfondo della prima sezione
const backgrounds = [
  "url('./images/restaurant-background-2.png')",
  "url('./images/immagine2.png')",
  "url('./images/immagine.png')",
  "url('./images/immagine3.png')"
];

let backgroundIndex = 0;
const section = document.querySelector('.section-1');

// Cambia l'immagine di sfondo ogni 4 secondi
setInterval(() => {
  section.style.backgroundImage = `
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.575)),
    ${backgrounds[backgroundIndex]}
  `;

  backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
}, 4000);


// Sezione per la gestione del cambio dei testi nella prima sezione
const texts = document.querySelectorAll('.section-1-Text .text-item'); // Seleziona tutti i testi
let i = 0; // Variabile per tracciare l'indice della parola corrente

// Cambia il testo visibile ogni 4 secondi
setInterval(() => {
  const currentText = document.querySelector('.section-1-Text .text-item.change'); // Seleziona il testo con la classe 'change'

  if (currentText) {
    currentText.classList.remove('change'); // Rimuove la classe 'change' dal testo corrente

    // Se siamo oltre l'ultimo testo, ripristina al primo
    if (i >= texts.length) {
      texts[0].classList.add('change'); // Aggiungi la classe 'change' al primo testo
      i = 0; // Resetta l'indice a 0
    } else {
      texts[i].classList.add('change'); // Aggiungi la classe 'change' al testo successivo
      i++; // Incrementa l'indice
    }
  }
}, 4000); // Cambia il testo ogni 4 secondi


// Sezione per nascondere e mostrare la navbar durante lo scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

// Rileva il movimento dello scroll per nascondere o mostrare la navbar
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    // Scroll verso il basso → nascondi la navbar
    navbar.style.top = "-100px";
  } else {
    // Scroll verso l'alto → mostra la navbar
    navbar.style.top = "0";
  }

  lastScroll = currentScroll;
});
