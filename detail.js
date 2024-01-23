$('.product__img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // arrows: true,
  fade: true,
  asNavFor: '.product__img-sub'
});
$('.product__img-sub').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  infinite: true,
  asNavFor: '.product__img',
  centerMode: true,
  focusOnSelect: true,
  prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
});
