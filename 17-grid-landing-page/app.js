const btnHamburguesa = document.getElementById('menu-btn');
const menuNav = document.getElementById('main-nav');
const bodyElement = document.body;

btnHamburguesa.addEventListener('click', () => {
    menuNav.classList.toggle('is-open');
    bodyElement.classList.toggle('has-overlay');
    const icono = btnHamburguesa.querySelector('img');

    if (menuNav.classList.contains('is-open')) {
        icono.src = './assets/images/icon-close.svg';
    } else {
        icono.src = './assets/images/icon-menu.svg';
    }
});