document.addEventListener("DOMContentLoaded", () => {
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
  
  // функция открывает и закрывает выпадающий список
  function openCloseDropdown() {
    catalogSections.forEach((el) => {
      if(el == this) {
        el.children[1].classList.toggle("drop-down_active");
        el.classList.toggle("header__catalog-section_open");
        el.blur();
        dropdownLinkFocus();
      }
      else {
        el.children[1].classList.remove("drop-down_active");
        el.classList.remove("header__catalog-section_open");
      }
    });
  }

  // функция даёт или убирает outline родителю ссылки при фокусе на неё или потере фокуса
  function dropdownLinkFocus() {
    const dropdownLinks = document.querySelectorAll(".drop-down__link");
    dropdownLinks.forEach((el) => {
      el.addEventListener("focusin", (e) => {
        if(el == e.target) {
          el.parentNode.classList.add("drop-down__item-focus");
        }
      });
      el.addEventListener("focusout", (e) => {
        if(el == e.target) {
          el.parentNode.classList.remove("drop-down__item-focus");
        }
      });
    });
  }

  catalogSections.forEach((el) => {
    el.addEventListener("click", openCloseDropdown);
  });
  
  const scroll = document.querySelectorAll(".drop-down__scroll-aria");
  scroll.forEach((el) => {
    new SimpleBar(el);

    // убираем возможность фокусировки на контейнере скролл-бара
    const simplebarContentWrappers = document.querySelectorAll(".simplebar-content-wrapper");
    simplebarContentWrappers.forEach((el) => {
      el.tabIndex = -1;
    });
  });


});


