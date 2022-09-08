const swiper = new Swiper('.swiper', {
  // autoplay: {
  //   delay: 5000,
  // },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
});

// new SimpleBar(document.getElementById('#simplebar'));

const catalogSections = document.querySelectorAll(".header__catalog-section");

catalogSections.forEach((el) => {
  el.addEventListener("click", () => {
    const dropDown = el.children;
    dropDown[1].classList.add("drop-down_active");
  })
});

new SimpleBar(document.getElementById('#simplebar'));