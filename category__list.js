let datacategotyList = [
    {
        "id": 1,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 1,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 3,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 4,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 5,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 6,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 7,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 8,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 9,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 10,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 1,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 2,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 3,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 4,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 5,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 6,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 7,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 8,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 9,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 10,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 7,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 8,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 9,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
    {
        "id": 10,
        "img": "./img/category/fashion.png",
        "name": "Thời trang nam",
    },
];

const categotyList = document.querySelector(".category__list");
const rendercategotyListItem = (params) => {
    categotyList.innerHTML = params
        .map((item) => {
            return `<li class="category__list-item col-1">
        <a href="#" class="d-flex flex-column justify-content-center align-items-center">
            <img src="${item.img}" alt="${item.name}">
            <span>${item.name}</span>
        </a>
    <li>
    `;
        })
        .join("");
};
rendercategotyListItem(datacategotyList);