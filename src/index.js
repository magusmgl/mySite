import "./styles/main.scss"

let headerBurger = document.querySelector(".header__burger");
let headerNav = document.querySelector(".header__menu");
let body = document.querySelector("body");

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('change');
    headerNav.classList.toggle('change');
    body.classList.toggle('lock');
})

document.addEventListener('click', (e) => {
    if (e.target.nodeName === 'A') {
        headerBurger.classList.toggle('change');
        headerNav.classList.toggle('change');
        body.classList.toggle('lock');
    }
})
