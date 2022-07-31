// mobile memu navbar
(function mainScript() {
  "use strict";

  const offcanvasToggle = document.querySelector(
    '[data-bs-toggle="offcanvas"]'
  );
  const offcanvasCollapse = document.querySelector(".offcanvas-collapse");

  offcanvasToggle.addEventListener("click", function () {
    offcanvasCollapse.classList.toggle("open");
  });
})();

/* SCROLL NAVBAR */
$(() => {
  $(".new-card").slice(0, 4).show();
  $(".load-more").click(function (e) {
    e.preventDefault();
    $(".new-card:hidden").slice(0, 4).slideDown();
  });
});

/* ACTIVE LINK NAVBAR */
$(document).ready(function () {
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });
});

// testimonial slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centerSlides: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
      },
    },
    1024: {
      slidesPerView: 3,
      centerSlides: true,
      loop: true,
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
      },
    },
  },
  navigation: {
    nextEl: ".bxs-chevron-right-circle",
    prevEl: ".bxs-chevron-left-circle",
  },
});

// AOS
AOS.init();
