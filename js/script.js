$(document).ready(function(){

AOS.init();

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    slidesPerView: 1,
  });

  $('.menu-btn').click(function(){
    $('.menu-bar-box').toggleClass('active');
  });
});