cconst icons = document.querySelectorAll('.section-1-Icons i'); // Seleziona tutte le icone

let i = 1; // Variabile per tracciare l'indice dell'icona corrente

setInterval(() => {
  const icon = document.querySelector('.section-1-Icons i.change'); // Seleziona l'icona con la classe 'change'
  
  // Se l'icona esiste
  if (icon) {
    icon.classList.remove('change'); // Rimuove la classe 'change' dall'icona corrente


  if(i>icons.length){
    icons[0].classList.add('change')
    i=1
  }else{
    icon.nextElementSibling.classList.add('change')
  }
 

},4000);