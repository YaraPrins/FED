// JavaScript Document

var overlay = document.querySelector("body > div");
var nav = document.querySelector("header div nav");
var header = document.querySelector("header > div div");
var hamburgerIcon = document.querySelector("header > div div div");
var main = document.querySelector("main");
var rainbowTrigger = document.querySelector("header div nav ul li:nth-of-type(10) img");
var liTextHoverRainbow = document.querySelectorAll(".rainbow");
var liImgHoverRainbow = document.querySelectorAll(".rainbow-img");


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

function rainbowTriggerClicked() {
    rainbowTrigger.style.opacity = "1";
    liTextHoverRainbow.forEach(a => {
        a.classList.add("rainbow-wizard");
    })
    liImgHoverRainbow.forEach(li => {
        li.classList.add("rainbow-wizard-img");
    })
}
function rainbowTriggerDBLClicked() {
    rainbowTrigger.style.opacity = "";
    liTextHoverRainbow.forEach(a => {
        a.classList.remove("rainbow-wizard");
    })
    liImgHoverRainbow.forEach(li => {
        li.classList.remove("rainbow-wizard-img");
    })
}

hamburgerIcon.addEventListener("click", navMobOpen);
overlay.addEventListener("click", navMobClose);
rainbowTrigger.addEventListener("click", rainbowTriggerClicked);
rainbowTrigger.addEventListener("dblclick", rainbowTriggerDBLClicked);