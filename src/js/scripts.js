const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 5000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
});

// Drop down
const catalogSections = document.querySelectorAll(".header__catalog-section");

function openCloseDropDown() {
  catalogSections.forEach((el) => {
    if(el == this) {
      el.children[1].classList.toggle("drop-down_active");
      el.classList.toggle("header__catalog-section_open");
    }
    else {
      el.children[1].classList.remove("drop-down_active");
      el.classList.remove("header__catalog-section_open");
    }
  });
};

catalogSections.forEach((el) => {
  el.addEventListener("click", openCloseDropDown);
});

new SimpleBar(document.getElementById('#simplebar'));