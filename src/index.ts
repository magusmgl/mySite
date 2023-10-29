import "./styles/main.scss"

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

let headerBurger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__menu");
const body = document.querySelector("body");

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('change');
    headerNav.classList.toggle('change');
    body.classList.toggle('lock');
})

document.addEventListener('click', (e) => {
    if ((<Element>e.target).nodeName === 'A') {
        headerBurger.classList.toggle('change');
        headerNav.classList.toggle('change');
        body.classList.toggle('lock');
    }
})