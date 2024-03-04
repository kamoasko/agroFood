"use strict";

//header fixed

// const header1 = document.querySelector("header");

// let headerScrollHandler = () => {
//   header1.classList.toggle("active", scrollY > 100);
// };

// window.addEventListener("scroll", headerScrollHandler);
// headerScrollHandler();

// search open

let openSearch = document.querySelector(".search__btn-active");
let searchForm = document.querySelector(".search__form");
let logo = document.querySelector(".header__logo");
let navbarMenu = document.querySelector(".nav_menu_search");
let navbarRight = document.querySelector(".navbar__right");
let closeSearchForm = document.querySelector(".search__close");
let hamburgerIcon = document.querySelector(".hamburger__icon");

let responsiveWidth = window.innerWidth;
let header = document.querySelector("header");

closeSearchForm.addEventListener("click", (event) => {
  event.stopPropagation();

  searchForm.classList.remove("isActive");
  logo.classList.remove("isActive");

  if (responsiveWidth > 992) {
    navbarMenu.classList.remove("isActive");
    navbarRight.classList.remove("isActive");
  } else {
    // Check if menu is hidden before adding class
    if (!navbarMenu.classList.contains("isActive")) {
      navbarMenu.classList.add("isActive");
    }
    navbarRight.classList.remove("isActive");
    header.style.height = null; // Remove height and alignItems styles
    header.style.alignItems = null;
  }
});

function openActives() {
  openSearch.addEventListener("click", () => {
    if (responsiveWidth <= 992) {
      searchForm.classList.add("isActive");
      logo.classList.add("isActive");
      navbarRight.classList.add("isActive");

      // Only hide menu if it wasn't already open
      if (navbarMenu.classList.contains("isActive")) {
        navbarMenu.classList.remove("isActive");
        header.style.height = "100vh"; // Remove height and alignItems styles
        header.style.alignItems = "stretch";
      }
    } else {
      navbarRight.classList.add("isActive");
      searchForm.classList.add("isActive");
      navbarMenu.classList.add("isActive");
      logo.classList.add("isActive");
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

// mobile submenu dropdown

let openSubBtns = document.querySelectorAll(".caret");
let subMenus = document.querySelectorAll(".sub_menu");

// openSubBtns.forEach((a) => {
//   console.log(a.parentElement.parentElement.childNodes[3]);
// });

openSubBtns.forEach((openSubBtn) => {
  openSubBtn.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("opened");
    e.currentTarget.classList.toggle("flex-center");
    e.currentTarget.parentElement.parentElement.childNodes[3].classList.toggle(
      "opened"
    );
  });
});

// categories slider

$(".categories__slider").slick({
  //   dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  fade: true,
  cssEase: "linear",
  arrows: false,
  // adaptiveHeight: true
});

// brands slider

$(".brands__slider").slick({
  //   dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  fade: true,
  cssEase: "linear",
  arrows: false,
  // adaptiveHeight: true
});

// go to top button
const goTopBtn = document.querySelector(".go-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 450) {
    goTopBtn.style.display = "flex";
  } else {
    goTopBtn.style.display = "none";
  }
});

goTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scrollbar witdh

const header1 = document.querySelector("header");
const child = document.querySelector("main > div");
// Get the scrollbar width
const scrollbarWidth = child
  ? child.parentNode.offsetWidth - child.offsetWidth
  : "";
header1.style.setProperty("--scroll-bar-width", scrollbarWidth + "px");
