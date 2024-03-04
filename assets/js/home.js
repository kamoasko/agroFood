"use strict";

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      if (!reveals[i].classList.contains("activity__slide")) {
        reveals[i].classList.add("active");
        if (reveals[i].classList.contains("statistics")) {
          const counters = document.querySelectorAll(".value");
          const speed = 1000;

          counters.forEach((counter) => {
            const animate = () => {
              const value = +counter.getAttribute("count");
              const data = +counter.innerText;

              const time = value / speed;
              if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
              } else {
                counter.innerText = value;
              }
            };

            animate();
          });
        }
      }
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

document.querySelector("main").addEventListener("scroll", reveal);

reveal();

// homepage first slider

$(".homepages__slider").slick({
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// brands slider

$(".brands__sliderHome").slick({
  centerMode: true,
  centerPadding: "6rem",
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,

  responsive: [
    // {
    //   breakpoint: 1024,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     infinite: true,
    //   },
    // },
    // {
    //   breakpoint: 600,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //   },
    // },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  autoplay: {
    delay: 4000,
    // disableOnInteraction: false,
  },
});

// $(".brands__slider").on("init", function () {
//   getBrandsId();
// });

// $(".brands__slider").on("afterChange", function () {
//   getBrandsId();
// });

// function getBrandsId() {
//   let brands = document.querySelectorAll(".activities_brand");

//   brands.forEach((brand) => {
//     if (
//       brand.classList.contains("slick-center") &&
//       brand.classList.contains("slick-current")
//     ) {
//       let brandId = brand.getAttribute("data-brand-id");
//       getDatas(brandId).then((res) => {
//         let productContainer = document.querySelector(".activities_product");
//         productContainer.innerHTML = "";

//         res.forEach((product) => {
//           function getProductTitle(title) {
//             var indexOfDash = title.indexOf("-");
//             if (indexOfDash !== -1) {
//               var result = title.substring(indexOfDash + 1).trim();
//               return result;
//             } else {
//               return title;
//             }
//           }
//           let element = `<article class="activity__slide activity__cart products__cart">
//                               <a href="{{route('product.detail',$product->slug)}}">
//                                   <div class="activity__cart-image">
//                                       <img
//                                           src="https://full.coder.az/storage/${
//                                             product.main_image
//                                           }"
//                                       />
//                                       <img
//                                           src="https://full.coder.az/storage/${
//                                             product.main_image
//                                           }"
//                                       />
//                                   </div>
//                                   <div class="activity__cart-detail">
//                                       <h4 class="activity__cart-title">
//                                        ${getProductTitle(product.title)}
//                                   </div>
//                               </a>
//                           </article>`;
//           productContainer.insertAdjacentHTML("afterbegin", element);
//         });
//         // productCourusel()
//       });
//     }
//   });
// }

// getBrandsId();

// async function getDatas(id) {
//   let html = document.querySelector("html");
//   let htmlLang = html.getAttribute("lang");
//   let res = await fetch(`https://full.coder.az/${htmlLang}/getProducts/${id}`);

//   let data = await res.json();
//   return data;
// }

// posts slider

$(".posts__slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    // {
    //   breakpoint: 600,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //   },
    // },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  autoplay: false,
  //  {
  //   delay: 1500,
  //   disableOnInteraction: false,
  // },
});
