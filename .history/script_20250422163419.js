const words = document.querySelectorAll('.changing-text .word'); // Seleziona tutte le parole
let i = 0; // Variabile per tracciare l'indice della parola corrente

setInterval(() => {
  const currentWord = document.querySelector('.changing-text .word.change'); // Seleziona la parola con la classe 'change'
  
  // Se esiste una parola corrente con la classe 'change'
  if (currentWord) {
    currentWord.classList.remove('change'); // Rimuove la classe 'change' dalla parola corrente
  }

  // Se siamo oltre l'ultima parola, ripristina alla prima
  if (i >= words.length) {
    words[0].classList.add('change'); // Aggiunge la classe 'change' alla prima parola
    i = 1; // Resetta l'indice a 1 (per evitare che il ciclo torni subito alla parola 0)
  } else {
    words[i].classList.add('change'); // Aggiunge la classe 'change' alla parola successiva
    i++; // Incrementa l'indice
  }

}, 4000); // Cambia la parola ogni 4 secondi



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
