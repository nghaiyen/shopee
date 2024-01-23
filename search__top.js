let dataSearchTop = [
    {
        "id": "1",
        "img": "./img/searchtop/product1.jpg",
        "name": "chân váy xẻ tà",
        "sales": "7k+ / tháng",
    },
    {
        "id": "1",
        "img": "./img/searchtop/product1.jpg",
        "name": "chân váy xẻ tà",
        "sales": "7k+ / tháng",
    },
    {
        "id": "1",
        "img": "./img/searchtop/product1.jpg",
        "name": "chân váy xẻ tà",
        "sales": "7k+ / tháng",
    },
    {
        "id": "1",
        "img": "./img/searchtop/product1.jpg",
        "name": "chân váy xẻ tà",
        "sales": "7k+ / tháng",
    },
    {
        "id": "1",
        "img": "./img/searchtop/product1.jpg",
        "name": "chân váy xẻ tà",
        "sales": "7k+ / tháng",
    },
    {
        "id": "1",
        "img": "./img/searchtop/product1.jpg",
        "name": "chân váy xẻ tà",
        "sales": "7k+ / tháng",
    },
    {
        "id": "1",
        "img": "./img/searchtop/product1.jpg",
        "name": "chân váy xẻ tà",
        "sales": "7k+ / tháng",
    },
    {
        "id": "1",
        "img": "./img/searchtop/product1.jpg",
        "name": "chân váy xẻ tà",
        "sales": "7k+ / tháng",
    },
    {
        "id": "1",
        "img": "./img/searchtop/product1.jpg",
        "name": "chân váy xẻ tà",
        "sales": "7k+ / tháng",
    },
    {
        "id": "1",
        "img": "./img/searchtop/product1.jpg",
        "name": "chân váy xẻ tà",
        "sales": "7k+ / tháng",
    },
    {
        "id": "1",
        "img": "./img/searchtop/product1.jpg",
        "name": "chân váy xẻ tà",
        "sales": "7k+ / tháng",
    },
    {
        "id": "1",
        "img": "./img/searchtop/product1.jpg",
        "name": "chân váy xẻ tà",
        "sales": "7k+ / tháng",
    },
];
const listSearchTop = document.querySelector(".searchtop__list")
const rendersearchItem = (params) => {
    listSearchTop.innerHTML = params
    .map((item) => {
        return `
        <li class="searchtop__item col-2">
                        <a class="d-flex flex-column justify-content-center">
                        <div class="searchtop__item-img">
                            <img class="top w-25 h-25" src="./img/searchtop/top.png" alt="">
                            <img class="searchtop__img-product w-100" src="${item.img}" alt="${item.name}">
                            <span class="w-100">${item.sales}</span>
                        </div>
                        <div class="searchtop__name w-100">${item.name}</div>
                        </a>
                    </li>
        `
        ;
    })
    .join("");
}
rendersearchItem(dataSearchTop);

// 
$('.searchtop__list').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
        },
    ]
        
}
);

