$(document).ready(function(){
   $('.slider__track').slick({
      //autoplay: true,
      prevArrow: $('.btn-left'),
      nextArrow: $('.btn-right'),
      dots: true,
      dotsClass: 'slider__dots-wrapper',
      responsive: [
         {
            breakpoint: 428,
            settings: {
               arrows: false
            }
         }
      ]
   });
});