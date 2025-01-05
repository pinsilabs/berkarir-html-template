(function ($) {
  "use strict";

  // Mobile navigation
  $('.header-mobile-button').on('click', function() {
    $(this).toggleClass('clicked');
    $(this).closest('header').find('.header-menu-wrapper').toggleClass('show');
    $('body').toggleClass('fixed');
  });

  // Slick carousel
  $('.home-jobs-carousel').each(function () {
    $(this).slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  });

  $('.company-gallery-carousel').each(function () {
    $(this).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  });

  // Jobs listing filter
  $('.filter-navigation').on('click', function() {
    $(this).parent().find('.filter-group').toggleClass('show');
  });

})(jQuery);