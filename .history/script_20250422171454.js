const texts = document.querySelectorAll('.section-1-Text .text-item'); // Seleziona tutti i testi
let i = 0; // Variabile per tracciare l'indice della parola corrente

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





  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
      // Scroll verso il basso → nascondi
      navbar.style.top = "-100px";
    } else {
      // Scroll verso l'alto → mostra
      navbar.style.top = "0";
    }

    lastScroll = currentScroll;
  });


  const gradient = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.575))";

  const backgrounds = [
    `${gradient}, url('./images/immagine.png')`,
    `${gradient}, url('./images/immagine2.png')`,
    `${gradient}, url('./images/immagine3.png')`
  ];
  
  let backgroundIndex = 0; // Iniziamo dalla prima immagine
const section = document.querySelector('.section-1');

setInterval(() => {
  // Cambia l'immagine di sfondo
  section.style.backgroundImage = backgrounds[backgroundIndex];
  
  // Incrementa l'indice e se arriva alla fine, torna al primo
  backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
}, 4000); // Cambia l'immagine ogni 4 secondi