"use strict";

let openSearch = document.querySelector(".search__btn-active");
let searchForm = document.querySelector(".search__form");
let logo = document.querySelector(".header__logo");
let navbarMenu = document.querySelector(".nav_menu_search");
let navbarRight = document.querySelector(".navbar__right");
let closeSearchForm = document.querySelector(".search__close");

closeSearchForm.addEventListener("click", () => {
  searchForm.classList.remove("isActive");
  logo.classList.remove("isActive");
  navbarMenu.classList.remove("isActive");
  navbarRight.classList.remove("isActive");
});

function openActives() {
  openSearch.addEventListener("click", () => {
    searchForm.classList.add("isActive");
    logo.classList.add("isActive");
    navbarRight.classList.add("isActive");
    if (!navbarMenu.classList.contains("isActive")) {
      navbarMenu.classList.add("isActive");
    }
  });
}

openActives();

// hamburger icon

$(document).ready(function () {
  $(".hamburger__icon").click(function () {
    $(this).toggleClass("open");
    $(".nav_menu").toggleClass("isActive");
  });
});
