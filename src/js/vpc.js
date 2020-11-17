$(document).ready(function () {
  if($('body').width() > 1200) {
    $('.animate-scroll').addClass("hidden").viewportChecker({
      classToAdd: 'visible',
      offset: 200
    });
  }
});
