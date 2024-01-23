$('.banner__bottom-list').slick({
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
    ]

}
);