"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles/main.scss");
var headerBurger = document.querySelector(".header__burger");
var headerNav = document.querySelector(".header__menu");
var body = document.querySelector("body");
headerBurger.addEventListener('click', function () {
    headerBurger.classList.toggle('change');
    headerNav.classList.toggle('change');
    body.classList.toggle('lock');
});
document.addEventListener('click', function (e) {
    if (e.target.nodeName === 'A') {
        headerBurger.classList.toggle('change');
        headerNav.classList.toggle('change');
        body.classList.toggle('lock');
    }
});
