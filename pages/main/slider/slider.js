$(document).ready(function(){
   $('.slider__track').slick({
      //autoplay: true,
      prevArrow: $('.btn-left'),
      nextArrow: $('.btn-right'),
      dots: true,
      dotsClass: 'slider__dots-wrapper',
      //adaptiveHeight: true,
      responsive: [
         {
            breakpoint: 480,
            settings: {
               arrows: false
            }
         }
      ]
   });
});