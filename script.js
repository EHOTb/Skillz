let menu = document.querySelector(".burger-menu__nav");

let menuBtn = document.querySelector(".burger-menu__button");

let cross = document.querySelector(".burger-menu__button");

let burgMenu = document.querySelector(".burger-menu");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("burger-menu__nav-active");
});

menuBtn.addEventListener("click", function() {
    cross.classList.toggle("burger-menu__button-active");
});

menuBtn.addEventListener("click", function() {
    burgMenu.classList.toggle("burger-menu__active");
});

// menu.addEventListener("click", function() {
//     burgMenu.classList.toggle("");
// });