let menu = document.querySelector(".burger-menu__nav");

let menuBtn = document.querySelector(".burger-menu__button");

let cross = document.querySelector(".burger-menu__button");

let burgMenu = document.querySelector(".burger-menu");

let body = document.body;

let active = document.querySelector(".burger-menu__nav-active");

let burger = document.querySelector("#burger");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("burger-menu__nav-active");
});

menuBtn.addEventListener("click", function() {
    cross.classList.toggle("burger-menu__button-active");
});

menuBtn.addEventListener("click", function() {
    burgMenu.classList.toggle("burger-menu__active");
});

body.addEventListener("click", function() {
    body.classList.toggle("noscroll");
});

active.addEventListener("click", function() {
    menu.classList.toggle("burger-menu__nav-active");
    burgMenu.classList.toggle("burger-menu__active");
    let menuBtn = document.querySelector(".burger-menu__button-active");
});