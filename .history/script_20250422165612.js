const images = document.querySelectorAll('.section-1-Text .image-item'); // Seleziona tutte le immagini
let i = 0; // Variabile per tracciare l'indice dell'immagine corrente

setInterval(() => {
  const currentImage = document.querySelector('.section-1-Text .image-item.change'); // Seleziona l'immagine con la classe 'change'
  
  if (currentImage) {
    currentImage.classList.remove('change'); // Rimuove la classe 'change' dall'immagine corrente

    // Se siamo oltre l'ultima immagine, ripristina alla prima
    if (i >= images.length) {
      images[0].classList.add('change'); // Aggiunge la classe 'change' alla prima immagine
      i = 0; // Resetta l'indice a 0
    } else {
      images[i].classList.add('change'); // Aggiunge la classe 'change' alla prossima immagine
      i++; // Incrementa l'indice
    }
  } else {
    // Se nessuna immagine ha la classe 'change', la prima immagine la riceve
    images[0].classList.add('change');
    i = 1;
  }
}, 4000); // Cambia l'immagine ogni 4 secondi




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
