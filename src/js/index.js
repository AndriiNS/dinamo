import mobileNav from "./modules/mobile-nav.js";
mobileNav();
//========================================================================================================================================================

import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".arrow-right",
    prevEl: ".arrow-left"
  },
  slidesPerView: 5.3,
  centeredSlides: true,
  loop: true
});
//========================================================================================================================================================

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery__image");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxClose = document.getElementById("lightbox-close");

  images.forEach((image) => {
    image.addEventListener("click", function () {
      const largeImageSrc = this.src;
      lightboxImage.src = largeImageSrc;
      lightbox.style.display = "flex";
    });
  });

  lightboxClose.addEventListener("click", function () {
    lightbox.style.display = "none";
  });
});
//========================================================================================================================================================

$(document).ready(function () {
  const modal = $("#myModal");
  const openBtn = $("#open-modal-btn");
  const closeBtn = $(".close-modal-btn");

  openBtn.click(function () {
    modal.fadeIn("slow");
  });

  closeBtn.click(function () {
    modal.fadeOut("slow");
  });
});
// $(document).ready(function () {
//   const modal = $("#myModal");
//   const openBtn = $(".open-modal-btn");
//   const closeBtn = $(".close-modal-btn");

//   // Відкриття модального вікна
//   openBtn.click(function () {
//     modal.fadeIn();
//   });

//   // Закриття модального вікна
//   closeBtn.click(function () {
//     modal.fadeOut();
//   });
// });
//========================================================================================================================================================

$(document).ready(function () {
  const modal = $("#myModale");
  const openBtn = $(".slider__btn");
  const closeBtn = $(".close-modal-btne");

  // Відкриття модального вікна
  openBtn.click(function () {
    modal.fadeIn();
  });

  // Закриття модального вікна
  closeBtn.click(function () {
    modal.fadeOut();
  });
});
