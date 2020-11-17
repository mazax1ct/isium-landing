$(document).ready(function () {
  if($('body').width() > 767) {
    function getSections () {
      var arr = [];

      $('.page__section').each(function() {
        var sectionId = $(this).attr('id'),
            sectionClass = '';

        if(!$(this).hasClass('form-section')) {
          if($(this).hasClass('page__section--dark')) {
            sectionClass = 'dark';
          } else {
            sectionClass = 'light';
          }

          var section = {
            id: sectionId,
            class: sectionClass
          }

          arr.push(section);
        }
      });

      return arr;
    }

    var sections = getSections ();

    function makeMenu (arr, id, cls) {
      var menu = '';

      menu += '<div class="page-nav"><div class="page-nav__menu"><ul class="page-nav__list page-nav__list--' + cls + '">';

      arr.forEach((item, i) => {
          menu += '<li class="page-nav__item"><a class="page-nav__link '+ (item.id == id ? 'page-nav__link--active' : '') +'" href="#'+ item.id +'">&nbsp;</a></li>';
      });

      menu += '</ul></div></div>';

      return menu;
    }

    sections.forEach((item, i) => {
      var menu = makeMenu (sections, item.id, item.class);
      $('#' + item.id).append(menu);
    });
  }
});

$(document).on('click', '.page-nav__link', function () {
  let scrollTop = $($(this).attr('href')).offset().top;
  $('html, body').animate({
    scrollTop: scrollTop
  }, 500);
  return false;
});
