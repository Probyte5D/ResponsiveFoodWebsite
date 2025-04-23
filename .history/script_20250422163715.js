const texts = document.querySelectorAll('.section-1-Text .text-item'); // Seleziona tutti i testi
let i = 1; // Variabile per tracciare l'indice del testo corrente

setInterval(() => {
  const currentText = document.querySelector('.section-1-Text .text-item.change'); // Seleziona il testo con la classe 'change'
  
  // Se esiste un testo con la classe 'change'
  if (currentText) {
    currentText.classList.remove('change'); // Rimuove la classe 'change' dal testo corrente
  }

  // Se siamo oltre l'ultimo testo, ripristina al primo
  if (i >= texts.length) {
    texts[0].classList.add('change'); // Aggiunge la classe 'change' al primo testo
    i = 1; // Resetta l'indice a 1 (per evitare che il ciclo torni subito al primo testo)
  } else {
    texts[i].classList.add('change'); // Aggiunge la classe 'change' al testo successivo
    i++; // Incrementa l'indice
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
