const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 2.1,
  spaceBetween: -300,



  breakpoints: {
    1400: {
      slidesPerView: 2.1,
      spaceBetween: -300,
    },
    1000: {
      slidesPerView: 2.3,
      spaceBetween: 70,
    },
    800: {
      slidesPerView: 1.5,
      spaceBetween: 80,
    },
    320: {
      slidesPerView: 1  ,
      spaceBetween: 50,
    },
  }
  // If we need pagination
 /* pagination: {
    el: '.swiper-pagination',
  }, */

  /*
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, */

  /*
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  }, */
});
