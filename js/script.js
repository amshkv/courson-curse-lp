'use strict';

$('.js-phone').mask('+7 (999) 999-99-99', {
  completed: function() {
    $('.js-phone')
      .parent()
      .removeClass('form__item-wrapper--error');
  }
});

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

// валидация email
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$('.js-email').on('change keyup input click', function() {
  var field = validateEmail($(this).val());
  if (!field) {
    $(this)
      .parent()
      .addClass('form__item-wrapper--error');
  } else {
    $(this)
      .parent()
      .removeClass('form__item-wrapper--error');
  }
});

$('.form').submit(function(event) {
  event.preventDefault();

  var $form = $(this),
    $firstName = $form.find('.js-name').val(),
    $phone = $form.find('.js-phone').val(),
    $email = $form.find('.js-email').val();

  if ($('.form__item-wrapper--error').length == 0) {
    alert(
      'Форма как-бы должна куда-то уйти, имя - ' +
        $firstName +
        ', телефон - ' +
        $phone +
        ', e-mail - ' +
        $email +
        '. Всё!'
    );
  }
});

$('.js-name').on('change keyup input click', function() {
  var field = $(this).val();
  var fieldtrim = $.trim(field);
  if (fieldtrim == '') {
    $(this)
      .parent()
      .addClass('form__item-wrapper--error');
  } else {
    $(this)
      .parent()
      .removeClass('form__item-wrapper--error');
  }
});
$('.js-phone').on('change keyup input click', function() {
  var field = $(this).val();
  if (field.indexOf('_') > 0) {
    $(this)
      .parent()
      .addClass('form__item-wrapper--error');
  }
});
