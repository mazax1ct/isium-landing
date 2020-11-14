let toggler = document.querySelector('.js-menu-toggler'),
    menu = document.querySelector('.menu');

function menuToggle() {
  menu.classList.toggle('is-open');
  return false;
};

toggler.addEventListener('click', menuToggle);
