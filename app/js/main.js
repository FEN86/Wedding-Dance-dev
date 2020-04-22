(function ($, undefined) {

  $('.burger-menu').on('click', function () {
    $('.main-nav').addClass('active');
  });
  $('.close-btn').on('click', function () {
    $('.main-nav').removeClass('active');
  });

  $('.slider-cards').slick({
    mobileFirst: true,
    arrows: false,
    slidesToShow: 1.2,
    lazyLoad: 'ondemand',
    infinite: false,
    adaptiveHeight: true,
    dots: true,
    responsive: [
      {
        breakpoint: 901,
        settings: "unslick"
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.5
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      },
    ]
  });

  var $coachesSlider = $('.coaches-slider').slick({
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    lazyLoad: 'ondemand',
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2.5,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      },
    ]
  });

  updateCounter($coachesSlider[0].slick);

  $('.coaches-slider').on(`init reInit`, function (event, slick) {
    updateCounter(slick);
  })
  $('.coaches-slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
    updateCounter(slick);
  })
  $(".slider-btn__arrow.slider-btn__arrow--left").click(function (event) {
    $(".coaches-slider").slick("slickPrev");
  });
  $(".slider-btn__arrow.slider-btn__arrow--right").click(function (event) {
    $(".coaches-slider").slick("slickNext");
  });

  function getSlidesToScroll(slick) {
    return Math.floor(slick.slickGetOption('slidesToScroll'));
  }

  function getNumOfSlides(slick) {
    return slick.slideCount / getSlidesToScroll(slick);
  }

  function getCurrSlide(slick) {
    var slidesToScroll = getSlidesToScroll(slick);
    var currSlide = (slick.slickCurrentSlide() + slidesToScroll) / slidesToScroll;

    return currSlide;
  }

  function updateCounter(slick) {
    $('.counter').text(getCurrSlide(slick) + ' of ' + getNumOfSlides(slick));
  }

})(jQuery);
