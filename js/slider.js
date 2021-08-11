let containerImage = document.querySelector('#containerAbout')




if(window.innerWidth < 500){
  containerImage.classList.add('single-item')
} else if(window.innerWidth > 500) {
  containerImage.classList.remove('single-item')
}


$('.single-item').slick({
  dots: false,
  centerMode: true,
  centerPadding: '35px',
  infinite: false,
  arrows: false,
  autoplay: true,
  speed: 300,
});

