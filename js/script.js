'use strict';

$('.js-phone').mask('+7 (999) 999-99-99');

$(document).ready(function() {
  $('.teacher__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000
  });
});

$('.js-button').click(function() {
  var scrollToElement = $(this).attr('data-href');
  $('html,body').animate(
    { scrollTop: $(scrollToElement).offset().top + 'px' },
    { duration: 1e3 }
  );
});
