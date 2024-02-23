(function ($) {
  "use strict";

  // offcanvas menu
  $(".menu-bar").on("click", function () {
    $(".offcanvas-menu,.offcanvas-overly").addClass("active");
    return false;
  });
  $(".menu-close,.offcanvas-overly").on("click", function () {
    $(".offcanvas-menu,.offcanvas-overly").removeClass("active");
  });

  $(document).ready(function () {
    $(".nav-button").click(function () {
      $("body").toggleClass("nav-open");
    });
  });

  $(".catagary_slick_item").slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    // prevArrow:'<i class="fa fa-chevron-left prev2"</i>',
    // nextArrow:'<i class="fa fa-chevron-right next2"</i>',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  });
  $(".slick_item").slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    // prevArrow:'<i class="fa fa-chevron-left prev2"</i>',
    // nextArrow:'<i class="fa fa-chevron-right next2"</i>',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  });

  $(".latest-ads-slider").slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    // prevArrow:'<i class="fa fa-chevron-left prev2"</i>',
    // nextArrow:'<i class="fa fa-chevron-right next2"</i>',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  });
  $(".urgent_slick_item").slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    // prevArrow:'<i class="fa fa-chevron-left prev2"</i>',
    // nextArrow:'<i class="fa fa-chevron-right next2"</i>',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  });

  $(window).on("load", function () {
    $(".preloader").fadeOut("slow");
  });

  $(".dropdown-menu li a").on("click", function () {
    var a = $(this).closest("a");
    var getSampling = a.text();
    var getImage = a.find("img").attr("src");

    // console.log("src path", getImage);
    $(this)
      .closest(".dropdown-menu")
      .prev(".dropdown-toggle")
      .find("span")
      .text(getSampling);
    $(this)
      .closest(".dropdown-menu")
      .prev(".dropdown-toggle")
      .find("img")
      .attr("src", getImage);
  });

  if ($(".hero-area-active").length > 0) {
    var slider = new Swiper(".hero-area-active", {
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 1000,
      autoplay: 600,
      delay: 1000,
      /*            slidesPerGroup: 4,*/
      autoplay: true,
      loop: true,
      breakpoints: {
        1700: {
          slidesPerView: 1,
        },
        1400: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });
  }

  /*    $(document).ready(function () {
        $(".select").niceSelect();
    });*/

  if ($(".catagary-active").length > 0) {
    var slider = new Swiper(".catagary-active", {
      slidesPerView: 4,
      spaceBetween: 17,
      speed: 1000,
      autoplay: 1000,
      delay: 1000,
      slidesPerGroup: 11,
      autoplay: false,
      loop: false,
      breakpoints: {
        1700: {
          slidesPerView: 11,
        },
        1400: {
          slidesPerView: 11,
        },
        1200: {
          slidesPerView: 11,
        },
        767: {
          slidesPerView: 8,
        },
        576: {
          slidesPerView: 6,
        },
        0: {
          slidesPerView: 5,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: ".catagary-button-next-1",
        prevEl: ".catagary-button-prev-1",
      },
    });
  }

  if ($(".futucher-active").length > 0) {
    var slider = new Swiper(".futucher-active", {
      slidesPerView: 4,
      spaceBetween: 17,
      speed: 1000,
      autoplay: 600,
      delay: 1000,
      slidesPerGroup: 4,
      autoplay: false,
      loop: false,
      breakpoints: {
        1700: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
        767: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 2,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: ".catagary-button-next-1",
        prevEl: ".catagary-button-prev-1",
      },
    });
  }

  /* slid-2*/
  if ($(".futucher-active-2").length > 0) {
    var slider = new Swiper(".futucher-active-2", {
      slidesPerView: 4,
      spaceBetween: 17,
      speed: 1000,
      autoplay: 600,
      delay: 1000,
      slidesPerGroup: 4,
      autoplay: false,
      loop: false,
      breakpoints: {
        1700: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
        767: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 2,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: ".catagary-button-next-2",
        prevEl: ".catagary-button-prev-2",
      },
    });
  }

  /* slid-3*/
  if ($(".futucher-active-3").length > 0) {
    var slider = new Swiper(".futucher-active-3", {
      slidesPerView: 4,
      spaceBetween: 17,
      speed: 1000,
      autoplay: 600,
      delay: 1000,
      slidesPerGroup: 4,
      autoplay: false,
      loop: false,
      breakpoints: {
        1700: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
        767: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 2,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: ".catagary-button-next-3",
        prevEl: ".catagary-button-prev-3",
      },
    });
  }

  /* slid-3*/
  if ($(".futucher-active-4").length > 0) {
    var slider = new Swiper(".futucher-active-4", {
      slidesPerView: 4,
      spaceBetween: 17,
      speed: 1000,
      autoplay: 600,
      delay: 1000,
      slidesPerGroup: 4,
      autoplay: false,
      loop: false,
      breakpoints: {
        1700: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
        767: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 2,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: ".catagary-button-next-4",
        prevEl: ".catagary-button-prev-4",
      },
    });
  }

  /* slid-5*/
  if ($(".futucher-active-5").length > 0) {
    var slider = new Swiper(".futucher-active-5", {
      slidesPerView: 4,
      spaceBetween: 17,
      speed: 1000,
      autoplay: 600,
      delay: 1000,
      slidesPerGroup: 4,
      autoplay: false,
      loop: false,
      breakpoints: {
        1700: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
        767: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 2,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: ".catagary-button-next-5",
        prevEl: ".catagary-button-prev-5",
      },
    });
  }

  /* slid-5*/
  if ($(".futucher-active-12").length > 0) {
    var slider = new Swiper(".futucher-active-12", {
      slidesPerView: 4,
      spaceBetween: 17,
      speed: 1000,
      autoplay: 600,
      delay: 1000,
      slidesPerGroup: 4,
      autoplay: false,
      loop: false,
      breakpoints: {
        1700: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
        767: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 2,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: ".catagary-button-next-12",
        prevEl: ".catagary-button-prev-12",
      },
    });
  }

  /* slid-5*/
  if ($(".newcar-active-6").length > 0) {
    var slider = new Swiper(".newcar-active-6", {
      slidesPerView: 3,
      spaceBetween: 8,
      speed: 1000,
      autoplay: 1000,
      delay: 1000,
      slidesPerGroup: 7,
      autoplay: false,
      loop: false,
      breakpoints: {
        1700: {
          slidesPerView: 7,
        },
        1400: {
          slidesPerView: 7,
        },
        1200: {
          slidesPerView: 7,
        },
        767: {
          slidesPerView: 5,
        },
        576: {
          slidesPerView: 3,
        },
        0: {
          slidesPerView: 2,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: ".catagary-button-next-6",
        prevEl: ".catagary-button-prev-6",
      },
    });
  }

  if ($(".latest-slider-wrp-item").length > 0) {
    var slider = new Swiper(".latest-slider-wrp-item", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1000,
      autoplay: 600,
      delay: 1000,
      /*            slidesPerGroup: 4,*/
      autoplay: false,
      loop: false,
      breakpoints: {
        1700: {
          slidesPerView: 1,
        },
        1400: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },

      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: function (number) {
          return "" + number;
        },
      },
      // // Navigation arrows
      // navigation: {
      //     nextEl: ".latest-nav-next",
      //     prevEl: ".latest-nav-prev",
      // },
    });
  }

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  $(".add-all-container").slice(0, 1).show();
  $("#loadMore").on("click", function (o) {
    o.preventDefault();
    $(".add-all-container:hidden").slice(0, 1).slideDown();
    /*   if($(".content:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("noContent");
    }*/
  });

  var player = new Plyr("#player-1", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });

  var player = new Plyr("#player-2", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });

  var player = new Plyr("#player-3", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });

  var player = new Plyr("#player-4", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-5", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-6", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-7", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-8", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-9", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });

  var player = new Plyr("#player-10", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });

  var player = new Plyr("#player-11", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-12", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-13", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-14", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-15", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-16", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });

  var player = new Plyr("#player-17", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-18", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-19", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-20", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-21", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });

  var player = new Plyr("#player-22", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-23", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-24", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });

  /*big video*/
  var player = new Plyr("#player-v-1", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-2", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-3", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-4", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-5", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-6", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-7", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-8", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-9", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-10", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-11", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-12", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-13", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-14", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-15", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-16", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-17", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-18", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-19", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-20", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-21", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-22", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-23", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-24", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-25", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-26", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-27", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-28", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-29", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-30", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-31", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-32", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });

  var player = new Plyr("#player-v-33", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-34", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-35", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-36", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-37", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-38", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-39", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-40", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-41", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-42", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-43", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-44", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-45", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-46", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-47", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
  var player = new Plyr("#player-v-48", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "volume",
      "fullscreen",
    ],
  });
})(jQuery);
