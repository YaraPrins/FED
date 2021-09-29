// JavaScript Document

var overlay = document.querySelector("body > div");
var nav = document.querySelector("header div nav");
var header = document.querySelector("header > div div");
var hamburgerIcon = document.querySelector("header > div div div");
var main = document.querySelector("main");
var footer = document.querySelector("footer");


function navMobOpen() {
    header.classList.add("mob-nav-open");
    overlay.classList.add("overlay");
    nav.classList.add("mob-menu");
    main.classList.add("position-fixed");
}
function navMobClose() {
    header.classList.remove("mob-nav-open");
    overlay.classList.remove("overlay");
    nav.classList.remove("mob-menu");
    main.classList.remove("position-fixed");
}
hamburgerIcon.addEventListener("click", navMobOpen);
overlay.addEventListener("click", navMobClose);