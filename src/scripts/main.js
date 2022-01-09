$(function(){
   $('.menu__btn').on('click',function(){
      $('.menu__list') .slideToggle('active');
    });
  


$(".photo__slider").slick({
   responsive: [
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
   ],
   prevArrow:'<button type="button" class="slick-arrow slick-prev"><img src="img/arrow-left.svg" alt="prev"></button>',
   nextArrow:'<button type="button" class="slick-arrow slick-next"><img src="img/arrow-right.svg" alt="next"></button>'

});

$("[data-fancybox]").fancybox();
  
$("#rateYo").rateYo();
  
$(".js-range-slider").ionRangeSlider();


});