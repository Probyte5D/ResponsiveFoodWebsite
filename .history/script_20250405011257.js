// Seleziona il contenitore della sezione 1
const section1 = document.querySelector('.section-1');
const icons = section1.querySelectorAll('.section-1-Icons i');


let i=1;

setInterval(()=> {
  i++;
  

  const icon= document.querySelector('.section-1-Icons.change')

  icon.classList.remove('change')

  if(i>icons.length){
    icons[0].classList.add('change')
    i=1
  }else{
    icon.nextElementSibling.classList.add('change')
  }
 

},4000);