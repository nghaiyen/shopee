let datacategotyList = [
    {
        "id": 1,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 2,
        "img": "./img/category/phone.png",
        "name": "Phụ kiện và điện thoại",
    },
    {
        "id": 3,
        "img": "./img/category/tech.png",
        "name": "Thiết bị điện tử",
    },
    {
        "id": 4,
        "img": "./img/category/laptop.png",
        "name": "máy tính và laptop",
    },
    {
        "id": 5,
        "img": "./img/category/cammera.png",
        "name": "máy ảnh và quay phim",
    },
    {
        "id": 6,
        "img": "./img/category/watch.png",
        "name": "đồng hồ",
    },
    {
        "id": 7,
        "img": "./img/category/shose.png",
        "name": "giày dép nam",
    },
    {
        "id": 8,
        "img": "./img/category/homecare.png",
        "name": "thiết bị gia dụng",
    },
    {
        "id": 9,
        "img": "./img/category/ball.png",
        "name": "Thể thao và du lịch",
    },
    {
        "id": 10,
        "img": "./img/category/moto.png",
        "name": "oto xe máy và xe đạp",
    },
    {
        "id": 11,
        "img": "./img/category/fashion-woman.png",
        "name": "Thời trang nữ",
    },
    {
        "id": 12,
        "img": "./img/category/ghe.png",
        "name": "mẹ và bé",
    },
    {
        "id": 13,
        "img": "./img/category/beauty.png",
        "name": "Sắc đẹp ",
    },
    {
        "id": 14,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 15,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 16,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 17,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 18,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 19,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 20,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
];

const categotyList = document.querySelector(".category__list");
const rendercategotyListItem = (params) => {
    categotyList.innerHTML = params
        .map((item) => {
            return `
            <li class="category__list-item d-flex flex-column">
            <a href="#" class="d-flex flex-column justify-content-center align-items-center">
                <img src="${item.img}" alt="${item.name}">
                <span>${item.name}</span>
            </a>
        </li>
    `;
        })
        .join("");
};
rendercategotyListItem(datacategotyList);

$('.category__list').slick({
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 10,
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
