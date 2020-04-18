(function ($, undefined) {

  $('.burger-menu').on('click', function () {
    $('.main-nav').addClass('active');
  });
  $('.close-btn').on('click', function () {
    $('.main-nav').removeClass('active');
  });

  $('.coaches-slider').slick({
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    lazyLoad: 'ondemand',
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.2
        }
      },
    ]
  });

  $('.coaches-slider').on(`init reInit`, function (event, slick) {
    $('.counter').text(1 + ' of ' + slick.slideCount);
  })
  $('.coaches-slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
    $('.counter').text(currentSlide + 1 + ' of ' + slick.slideCount);
  })
  $(".slider-btn__arrow.slider-btn__arrow--left").click(function (event) {
    $(".coaches-slider").slick("slickPrev");
  });
  $(".slider-btn__arrow.slider-btn__arrow--right").click(function (event) {
    $(".coaches-slider").slick("slickNext");
  });


})(jQuery);