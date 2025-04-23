const icons = document.querySelectorAll('.section-1-Icons i'); // Seleziona tutte le icone

let i = 1; // Variabile per tracciare l'indice dell'icona corrente

setInterval(() => {
  const icon = document.querySelector('.section-1-Icons i.change'); // Seleziona l'icona con la classe 'change'
  
  // Se l'icona esiste
  if (icon) {
    icon.classList.remove('change'); // Rimuove la classe 'change' dall'icona corrente

    // Se siamo oltre l'ultima icona, ripristina alla prima
    if (i >= icons.length) {
      icons[0].classList.add('change'); // Aggiunge la classe 'change' alla prima icona
      i = 1; // Resetta l'indice a 1
    } else {
      icon.nextElementSibling.classList.add('change'); // Passa alla prossima icona
      i++; // Incrementa l'indice
    }
  }
}, 4000);



<script>
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
</script>
