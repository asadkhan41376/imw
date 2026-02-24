(function($) {
  "use strict";
  const documentOn = $(document);
  const windowOn = $(window);

 documentOn.ready( function() {

    // Mobile Menu Init
    $('#mobile-menu').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: "1199",
      meanExpand: ['<i class="far fa-plus"></i>'],
    });

    $('#mobile-menus').meanmenu({
      meanMenuContainer: '.mobile-menus',
      meanScreenWidth: "1920",
      meanExpand: ['<i class="far fa-plus"></i>'],
    });

    // Sidebar Toggle
    $(".offcanvas__close, .offcanvas__overlay").on("click", function() {
      $(".offcanvas__info").removeClass("info-open");
      $(".offcanvas__overlay").removeClass("overlay-open");
    });

    $(".sidebar__toggle").on("click", function() {
      $(".offcanvas__info").addClass("info-open");
      $(".offcanvas__overlay").addClass("overlay-open");
    });

    // Body Overlay
    $(".body-overlay").on("click", function() {
      $(".offcanvas__area, .df-search-area, .body-overlay").removeClass("opened");
    });

    // Sticky Header
   windowOn.on('scroll', function() {
      if (windowOn.scrollTop() > 250) {
        $("#header-sticky").addClass("sticky");
      } else {
        $("#header-sticky").removeClass("sticky");
      }
    });

    // Popup
    $(".img-popup").magnificPopup({
      type: "image",
      gallery: { enabled: true },
    });

    $('.video-popup').magnificPopup({
      type: 'iframe'
    });

    // CounterUp
    $(".count").counterUp({
      delay: 15,
      time: 4000,
    });

    // Swiper Sliders
    const initSwiper = (selector, config) => {
      if ($(selector).length > 0) {
        new Swiper(selector, config);
      }
    };

    initSwiper(".nano-testimonial-slider", {
      spaceBetween: 30,
      speed: 2000,
      loop: true,
      autoplay: { delay: 1000, disableOnInteraction: false },
    });

    initSwiper(".nano-testimonial-content-slider", {
      spaceBetween: 30,
      speed: 2000,
      loop: true,
      direction: "vertical",
      autoplay: { delay: 1000, disableOnInteraction: false },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
    });

    initSwiper(".nano-client-image-slider", {
      spaceBetween: 50,
      speed: 2000,
      loop: true,
      direction: "vertical",
      autoplay: { delay: 1000, disableOnInteraction: false },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
      breakpoints: {
        991: { slidesPerView: 3, spaceBetween: 30 },
        767: { slidesPerView: 3, spaceBetween: 20 },
        575: { slidesPerView: 1, spaceBetween: 20 },
        400: { slidesPerView: 1, spaceBetween: 20 },
      },
    });

    initSwiper(".nano-testimonial-slide-3", {
      spaceBetween: 30,
      speed: 2000,
      loop: true,
      autoplay: { delay: 1000, disableOnInteraction: false },
      breakpoints: {
        1199: { slidesPerView: 3 },
        991: { slidesPerView: 2 },
        767: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        400: { slidesPerView: 1 },
      },
    });

    initSwiper(".nano-brand-slide-3", {
      spaceBetween: 30,
      speed: 2000,
      loop: true,
      autoplay: { delay: 1000, disableOnInteraction: false },
      breakpoints: {
        1399: { slidesPerView: 5 },
        1199: { slidesPerView: 4 },
        991: { slidesPerView: 3 },
        767: { slidesPerView: 2 },
        575: { slidesPerView: 2 },
        400: { slidesPerView: 1 },
      },
    });

    initSwiper(".nano-brand-slider-4", {
      spaceBetween: 30,
      speed: 2000,
      loop: true,
      autoplay: { delay: 1000, disableOnInteraction: false },
      breakpoints: {
        1699: { slidesPerView: 6 },
        1399: { slidesPerView: 5 },
        1199: { slidesPerView: 4 },
        991: { slidesPerView: 3 },
        767: { slidesPerView: 2 },
        575: { slidesPerView: 2 },
        400: { slidesPerView: 1 },
      },
    });

    initSwiper(".nano-image-slider", {
      spaceBetween: 30,
      speed: 2000,
      loop: true,
      autoplay: { delay: 2000, disableOnInteraction: false },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
    });

    // WOW Init
    new WOW().init();

    // Nice Select
    if ($('.single-select').length > 0) {
      $('.single-select').niceSelect();
    }

    // Mouse Cursor
    if ($(".mouseCursor").length > 0) {
      const cursorInner = document.querySelector(".cursor-inner"),
            cursorOuter = document.querySelector(".cursor-outer");
      let mouseX = 0, mouseY = 0, isMoving = false;

      window.onmousemove = function(e) {
        if (!isMoving) {
          cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
        cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
        cursorInner.classList.add("cursor-hover");
        cursorOuter.classList.add("cursor-hover");
      }).on("mouseleave", "button, a, .cursor-pointer", function() {
        if (!$(this).is("a, button") || !$(this).closest(".cursor-pointer").length) {
          cursorInner.classList.remove("cursor-hover");
          cursorOuter.classList.remove("cursor-hover");
        }
      });

      cursorInner.style.visibility = "visible";
      cursorOuter.style.visibility = "visible";
    }

    // Search Toggle
    if ($(".search-toggler").length > 0) {
      $(".search-toggler").on("click", function(e) {
        e.preventDefault();
        $(".search-popup").toggleClass("active");
        $("body").toggleClass("locked");
      });
    }

    // Back to Top
    windowOn.on('scroll', function() {
      if ($(this).scrollTop() > 20) {
        $("#back-top").addClass("show");
      } else {
        $("#back-top").removeClass("show");
      }
    });

    documentOn.on('click', '#back-top', function() {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
    });

  }); // End Document Ready

  // Preloader
  function handlePreloader() {
    if (typeof jQuery !== "undefined" && $('.preloader').length !== 0) {
        $('.preloader').delay(200).fadeOut(500);
    }
}


  windowOn.on('load', function() {
    handlePreloader();
  });

})(jQuery);
