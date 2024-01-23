let data = [
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
    {
        "id": "1",
        "img": "./img/header-selection/hs1.jpg",
        "describe": "Giảm đến 50%",
    },
];
const listBrand = document.querySelector(".header__bt-right-slider")
const renderBrandItem = (params) => {
    listBrand.innerHTML = params
        .map((item) => {
            return `
        <li class="header__bt-right-item d-flex flex-column">
                        <a href="#" class="d-flex flex-column align-items-center">
                            <img src="${item.img}" alt="">
                            <span>${item.describe}</span>
                        </a>
                    </li> 
        `;
        })
        .join("");
}
renderBrandItem(data);
// 
$('.header__bt-right-slider').slick({
    infinite: true,
    slidesToShow: 4,
    rows: 2,
    slidesToScroll: 2,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow:3,
                slidesToScroll: 3,
                rows: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                rows: 1,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
    ]

}
);

