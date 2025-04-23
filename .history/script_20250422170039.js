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


  const backgrounds = [
    "url('https://images.unsplash.com/photo-1521747116042-5c3f33a422c1?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8Y2FmaWVzJTIwbG9vZHMlMkMlMjBwbmVhdHxlbnwwfDB8fDE2ODY5MDQ5NjI&ixlib=rb-1.2.1&q=80&w=1080')",
    "url('https://images.unsplash.com/photo-1506784983877-45594e3d6e39?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8Y2FmaWVzJTIwbG9vZHMlMkMlMjBwbmVhdHxlbnwwfDB8fDE2ODY5MDQ5NjI&ixlib=rb-1.2.1&q=80&w=1080')",
    "url('https://images.unsplash.com/photo-1590486731314-8cf1b0bc2835?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8Y2FmaWVzJTIwbG9vZHMlMkMlMjBwbmVhdHxlbnwwfDB8fDE2ODY5MDQ5NjI&ixlib=rb-1.2.1&q=80&w=1080')"
  ];
  
  
  const section = document.querySelector('.section-1');
  
  setInterval(() => {
    // Cambia l'immagine di sfondo
    section.style.backgroundImage = backgrounds[i];
    
    // Incrementa l'indice e se arriva alla fine, torna al primo
    i = (i + 1) % backgrounds.length;
  }, 4000); // Cambia l'immagine ogni 4 secondi
  