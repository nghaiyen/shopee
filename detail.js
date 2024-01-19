$('.product__img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product__img-sub'
  });
  $('.product__img-sub').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: 'product__img',
    centerMode: true,
    focusOnSelect: true
  });