// body lock start

setTimeout(() => {
  document.documentElement.style.overflow = "auto";
}, 1900);

// body lock end

// fixed start

let header__burger = document.querySelector(".header__burger");
let header__list = document.querySelector(".header__list");
let header__icon = document.querySelector(".header__icon");
let body = document.querySelector("body");
let html = document.querySelector("html");

header__burger.addEventListener("click", function () {
  header__list.classList.toggle("active");
  header__icon.classList.toggle("active");
  body.classList.toggle("lock");
  html.classList.toggle("lock");
});

// fixed end

window.addEventListener("scroll", function () {
  let header__navbar = document.querySelector(".header__navbar");
  let image = document.querySelector(".navbar__logo");
  let icon = document.querySelector(".header__icon");
  if (window.pageYOffset > 150) {
    header__navbar.classList.add("fixed");
    icon.classList.add("fixed");
  } else {
    header__navbar.classList.remove("fixed");
    icon.classList.remove("fixed");
  }
});

