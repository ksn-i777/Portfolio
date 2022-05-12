const hamburger = document.querySelector('.hamburger'),
    overlay = document.querySelector('.overlay'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    overlay.classList.add('active'),
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    overlay.classList.remove('active'),
    menu.classList.remove('active');
});