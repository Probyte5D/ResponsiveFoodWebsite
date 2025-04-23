const icons = document.querySelectorAll('.section-1-Icons i')

setInterval(()=> {

  const icon= document.querySelector('.section-1-Icons.change')

  icon.classList.remove('change')
  icon.nextElementSibling.classList.add('change')

},4000);