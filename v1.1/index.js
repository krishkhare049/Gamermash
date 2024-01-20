// const PAGE_SWIPER = new Swiper('.page_swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     loop: true,

// If we need pagination
// pagination: {
//   el: '.swiper-pagination',
// },

// Navigation arrows
// navigation: {
//   nextEl: '.swiper-button-next',
//   prevEl: '.swiper-button-prev',
// },

// And if we need scrollbar
// scrollbar: {
//   el: '.swiper-scrollbar',
// },
// });

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     loop: true,

//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });


let home_page = document.getElementById("home_page");
let games_page = document.getElementById("games_page");
let aboutme_page = document.getElementById("aboutme_page");

let home_icon = document.getElementById("home_icon");
let games_icon = document.getElementById("games_icon");
let creator_icon = document.getElementById("creator_icon");

let smooth_scroll_to_top = document.getElementById("smooth_scroll_to_top");

let play_games_here = document.getElementById("play_games_here");

let loader = document.getElementById("loader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});

// window.addEventListener("scroll", () => {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     smooth_scroll_to_top.style.display = "flex";
//   }
//   else {
//     smooth_scroll_to_top.style.display = "none";

//   }
// });
document.body.addEventListener("scroll", () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    smooth_scroll_to_top.style.display = "flex";
  }
  else {
    smooth_scroll_to_top.style.display = "none";
  }
});

smooth_scroll_to_top.addEventListener("click", () => {
  // console.log("Scroll to top!");
  // window.scrollTo(0, 0);
  document.body.scrollTo(0, 0);
});

var swiper = new Swiper('.games_swiper', {

  // spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});