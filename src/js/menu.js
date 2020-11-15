function menuClose(evt) {
  if (!$('.menu').is(evt.target) && $('.menu').has(evt.target).length === 0) {
    $('.menu').removeClass('is-open');
    document.removeEventListener('click', menuClose);
  }
};

$(document).on('click', '.js-menu-toggler', function () {
  if($('.menu').hasClass('is-open')) {
    $('.menu').removeClass('is-open');
  } else {
    $('.menu').addClass('is-open');
    document.addEventListener('click', menuClose);
  }
  return false;
});
