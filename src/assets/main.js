function openNav() {
    const headerBurger = document.querySelector(".header__burger");
    const headerNav = document.querySelector(".header__menu");
    const body = document.querySelector("body");
    headerBurger.classList.toggle('change');
    headerNav.classList.toggle('change');
    body.classList.toggle('lock');
}

const headerBurger = document.querySelector(".header__burger")
document.addEventListener('click', (e) => {
    if (e.target.nodeName === 'A') {
        openNav();
    }
})
