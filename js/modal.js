let sendForm = document.querySelector('#sendForm')
let overlay = document.querySelector('#overlay')
let thanks = document.querySelector('#thanks')
let closeMenu = document.querySelector('.modal__close')
let body = document.querySelector('body')

sendForm.addEventListener('click', function(){
overlay.classList.add('block');
thanks.classList.add('block');
body.classList.add('overflow')
console.log('clicked');
})
closeMenu.addEventListener('click', function(){
  overlay.classList.remove('block');
  thanks.classList.remove('block'); 
  body.classList.remove('overflow')
})