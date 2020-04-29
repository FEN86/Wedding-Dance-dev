(function ($, undefined) {
  $(".burger-menu").on("click", function () {
    $(".main-nav").addClass("active");
    $("body").addClass("lock");
  });
  $(".close-btn").on("click", function () {
    $(".main-nav").removeClass("active");
    $("body").removeClass("lock");
  });

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
  $(".slider-btn__arrow.slider-btn__arrow--left").click(function (event) {
    $(".coaches-slider").slick("slickPrev");
  });
  $(".slider-btn__arrow.slider-btn__arrow--right").click(function (event) {
    $(".coaches-slider").slick("slickNext");
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

  wow = new WOW(
    {
      mobile: false
    }
  )
  wow.init();

})(jQuery);
