const elhumbergerMenu = document.querySelector(".humberger-menu");
const elnavOverflow = document.querySelector(".nav-overflow");
const elnavbarMobile = document.querySelector(".navbar-mobile");

const navFunction = function () {
  elhumbergerMenu.classList.toggle("toggle");
  elnavOverflow.classList.toggle("nav-overflow-hidden");
  elnavbarMobile.classList.toggle("nav-hidden");
};

elhumbergerMenu.addEventListener("click", navFunction);
elnavOverflow.addEventListener("click", navFunction);
