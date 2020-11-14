$(document).on('click', '.js-scroll-bottom', function () {
  let scrollTop = $(this).closest('.page__section').next('.page__section').offset().top;
  $('html, body').animate({
    scrollTop: scrollTop
  }, 500);
});
