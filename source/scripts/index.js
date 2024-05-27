/* в этот файл добавляет скрипты*/

const navToggle = document.querySelector('.nav-control');
const navMain = document.querySelector('.navigation__list');

navToggle.addEventListener('click', () => {
  if (navToggle.classList.contains('nav-control--close') && navMain.classList.contains('navigation__list--hidden')) {
    navToggle.classList.remove('nav-control--close');
    navToggle.classList.add('nav-control--open');
    navMain.classList.remove('navigation__list--hidden');

  } else {
    navToggle.classList.remove('nav-control--open');
    navToggle.classList.add('nav-control--close');
    navMain.classList.add('navigation__list--hidden');
  }
});
