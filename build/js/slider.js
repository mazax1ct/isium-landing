var slider = new Swiper('.js-slider', {
  // Optional parameters

  loop: true,
  speed: 600,
  effect: 'fade',

  // If we need pagination
  pagination: {
    el: '.js-gifts-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.js-swiper-button-next',
    prevEl: '.js-swiper-button-prev',
  }
});

slider.on('slideChange', function () {
  $('.js-count').html(slider.realIndex + 1);
});
