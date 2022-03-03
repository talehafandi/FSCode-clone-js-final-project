const hamburgerBtn = document.querySelector('.header__hamburger-button');
const hamburgerMenu = document.querySelector('.header__menu');
let isOpen = false;

hamburgerBtn.addEventListener('click', () => {
    if (!isOpen) {
        hamburgerMenu.classList.add('header__menu--open');
        isOpen = true;
    } else {
        hamburgerMenu.classList.remove('header__menu--open');
        isOpen = false;
    }
});