$(function () {
  'use strict';

  var $toggler      = $('.search__form__button_toggle');
  var $search       = $('.search');
  var $searchForm   = $('.search__form');
  var $searchMobile = $('.search_mobile');


  $toggler.on('click', function () {
    if (window.innerWidth <= 1024 && window.innerWidth > 768 ||
        window.innerWidth <= 560 && window.innerWidth) {
      $searchMobile.toggle();
      $toggler.hide();
    } else {
      $search.toggleClass('search_opened');
      $searchForm.toggleClass('search__form_showen');

      setTimeout(function () {
        $toggler.hide();
      }, 300);
    }
  });

  $(window).on('resize', function() {
    $searchMobile.hide();
    $search.removeClass('search_opened');
    $searchForm.removeClass('search__form_showen');
    $toggler.show();
  });

  // pdp
  setTimeout(function(){
    var $gallery     = $(".goods__gallery-main");
    var $galleryItem = $(".goods__gallery_wrapper-item");
    var img;
    $galleryItem.on('click', function(){
      $galleryItem.removeClass("active");
      
      img = $(this)
        .addClass("active")
        .html();

      $gallery.html(img);
    });
  }, 1000);

  var $cart     = $(".addToCart");
  $cart.on('click', function(){ 
    $cart.html( "product added"); 
    $($cart).css("background-color","green");
  });
  // end pdp

  $('.carousel').slick({
    dots:          false,
    infinite:      true,
    speed:         300,
    slidesToShow:  5,
    variableWidth: true
  });
});
