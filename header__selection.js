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
];
const listBrand =document.querySelector(".header__bt-right-slider")
const renderBrandItem = (params) =>{
    listBrand.innerHTML = params 
    .map((item) => {
        return `
        <li class="header__bt-right-item d-flex flex-column col-4">
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
    slidesToShow: 8,
    slidesToScroll: 8,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
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

