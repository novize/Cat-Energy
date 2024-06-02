/* в этот файл добавляет скрипты*/

const navToggle = document.querySelector('.nav-control');
const navMain = document.querySelector('.navigation__list');

const statHeader = document.querySelector('.header--no-js');
const statTogle = document.querySelector('.nav-control--no-js');
const statNav = document.querySelector('.navigation--no-js');
const statNavlist = document.querySelector('.navigation__list--no-js');

statHeader.classList.remove('header--no-js');
statTogle.classList.remove('nav-control--no-js');
statNav.classList.remove('navigation--no-js');
statNavlist.classList.remove('navigation__list--no-js');
statNavlist.classList.add('navigation__list--hidden');

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
