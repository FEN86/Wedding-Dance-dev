(function ($, undefined) {

  // Header
  $(window).on('scroll resize', function () {
    var header = $('.header'),
      headerTopPosition = header.offset().top;

    if (headerTopPosition > 0) {
      header.addClass('header--shadow');
    } else {
      header.removeClass('header--shadow');
    }
  });

  // Buttons
  $(".burger-menu").on("click", function () {
    $(".main-nav").addClass("active");
    $("body").addClass("lock");
  });
  $(".close-btn").on("click", function () {
    $(".main-nav").removeClass("active");
    $("body").removeClass("lock");
  });

  // First slider
  $(window).on("load resize orientationchange", function () {
    $(".slider-cards").each(function () {
      var $slider = $(this);
      if ($(window).width() > 901) {
        if ($slider.hasClass("slick-initialized")) {
          $slider.slick("unslick");
        }
      } else {
        if (!$slider.hasClass("slick-initialized")) {
          $slider.slick({
            mobileFirst: true,
            arrows: false,
            slidesToShow: 1.2,
            lazyLoad: "ondemand",
            infinite: false,
            adaptiveHeight: true,
            dots: true,
            responsive: [
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: 2.5,
                  dots: false,
                },
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2.5,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                },
              },
            ],
          });
        }
      }
    });
  });

  // Second slider
  var $coachesSlider = $(".coaches-slider").slick({
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    lazyLoad: "ondemand",
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2.5,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  updateCounter($coachesSlider[0].slick);

  $(".coaches-slider").on(`init reInit`, function (event, slick) {
    updateCounter(slick);
  });
  $(".coaches-slider").on(`afterChange`, function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    updateCounter(slick);
  });

  function getSlidesToScroll(slick) {
    return Math.floor(slick.slickGetOption("slidesToScroll"));
  }

  function getNumOfSlides(slick) {
    return slick.slideCount / getSlidesToScroll(slick);
  }

  function getCurrSlide(slick) {
    var slidesToScroll = getSlidesToScroll(slick);
    var currSlide =
      (slick.slickCurrentSlide() + slidesToScroll) / slidesToScroll;

    return currSlide;
  }

  function updateCounter(slick) {
    $(".counter").text(getCurrSlide(slick) + " of " + getNumOfSlides(slick));
  }

  // WOW animation
  wow = new WOW(
    {
      mobile: false
    }
  )
  wow.init();

})(jQuery);



// $(function () {
//   //init WOW.js
//   var wow = new WOW({
//     mobile: false
//   });
//   wow.init();

//   // Mobile Menu
//   $('.burger').on('click', function () {
//     var menu = $('.header__menu');

//     $(this).toggleClass('burger--active');
//     $(document.body).toggleClass('no-scroll');

//     if (menu.hasClass('header__menu--active')) {
//       menu.removeClass('header__menu--active')
//         .addClass('header__menu--hide');
//     } else {
//       menu.removeClass('header__menu--hide')
//         .addClass('header__menu--active');
//     }
//   });

//   // Header
//   $(window).on('scroll resize', function () {
//     var header = $('.header'),
//       headerTopPosition = header.offset().top;

//     if (headerTopPosition > 0) {
//       header.addClass('header--shadow');
//     } else {
//       header.removeClass('header--shadow');
//     }
//   });

//   // Scrollto
//   $('[data-scroll]').on('click', function (e) {
//     e.preventDefault();

//     var targetSection = $(this).data('scroll'),
//       headerH = $('.header').innerHeight(),
//       distance = $(targetSection).offset().top - headerH;

//     $('html,body').animate({
//       scrollTop: distance
//     }, 1000, 'swing');

//     $('.header__menu').removeClass('header__menu--active');
//     $('.burger').removeClass('burger--active');
//   });

//   // ArrowTop
//   $(window).on('scroll resize', function () {
//     var arrow = $('.arrow-up'),
//       bannerH = $('.banner').outerHeight(),
//       wScroll = $(window).scrollTop();

//     if (wScroll > bannerH) {
//       arrow.addClass('arrow-up--active');
//     } else {
//       arrow.removeClass('arrow-up--active');
//     }
//   });

//   // Services Slider
//   $(window).on('load resize orientationchange', function () {
//     $('.services__slider').each(function () {
//       var slider = $(this);

//       if ($(window).width() > 768) {
//         if (slider.hasClass('slick-initialized')) {
//           slider.slick('unslick');
//         }
//       } else {
//         if (!slider.hasClass('slick-initialized')) {
//           slider.slick({
//             arrows: false,
//             dots: true,
//             variableWidth: true,
//             slideToScroll: 1
//           });
//         }
//       }
//     });
//   });

//   // Coaches Slider
//   var sliderWrap = $('.coaches__slider');
//   var currentSliderBox = $('.coaches__slider-current');
//   var totalSliderBox = $('.coaches__slider-total');

//   sliderWrap.on('init afterChange', function (event, slick) {
//     setCounter(slick);
//   });

//   sliderWrap.slick({
//     infinite: false,
//     initialSlide: 0,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     appendArrows: '.coaches__slider-counter',
//     prevArrow: '<a class="arrow-prev"><i class="icon icon-arrow-prev"</a>',
//     nextArrow: '<a class="arrow-next"><i class="icon icon-arrow-next"</a>',
//     responsive: [
//       {
//         breakpoint: 952,
//         settings: {
//           slidesToShow: 1.6,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 769,
//         settings: {
//           slidesToShow: 2.4,
//           arrows: false,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 620,
//         settings: {
//           slidesToShow: 2.2,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 520,
//         settings: {
//           slidesToShow: 1.6,
//           slidesToScroll: 1,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 400,
//         settings: {
//           slidesToShow: 1.3,
//           slidesToScroll: 1,
//           dots: true
//         }
//       }
//     ]
//   });

//   function setCounter(slick) {
//     var slides = slick.slideCount,
//       slidesToShow = Math.floor(slick.options.slidesToShow),
//       slideToScroll = slick.options.slidesToScroll,
//       currentSlide = (slick.currentSlide + slideToScroll) / slideToScroll;

//     var totalSlidesList;

//     if (slides > slidesToShow) {
//       totalSlidesList = Math.ceil((slides - slidesToShow) / slideToScroll + 1);

//     } else {
//       totalSlidesList = currentSlide;
//     }

//     currentSliderBox.text(currentSlide);
//     totalSliderBox.text(totalSlidesList);
//   }
// });
