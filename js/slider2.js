const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // 📱 Responsive breakpoints
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
