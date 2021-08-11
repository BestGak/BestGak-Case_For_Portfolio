document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.faq__container-item');
  questions.forEach(quest => {
      quest.addEventListener('click', () => {
          quest.classList.toggle('faq__container-item--active');
          quest.nextElementSibling.classList.toggle('block');
      });
  });
});

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let bodyIndex = document.querySelector('body')

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
  bodyIndex.classList.toggle('overflow')
})

$('[data-fancybox="gallery"]').fancybox({
  loop: true
});


