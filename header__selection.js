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
];
const listBrand =document.querySelector(".header__bt-right-slider")
const renderBrandItem = (params) =>{
    listBrand.innerHTML = params 
    .map((item) => {
        return `
        <li class="header__bt-right-item d-flex flex-column col-3">
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
// render brand slider 2
let dataBrandSliderSecond = [
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
const listBrandSliderSecond =document.querySelector(".header__bt-right-slidersecond")
const renderBrandSecondItem = (params) =>{
    listBrandSliderSecond.innerHTML = params 
    .map((item) => {
        return `
        <li class="header__bt-right-item d-flex flex-column col-3">
                        <a href="#" class="d-flex flex-column align-items-center">
                            <img src="${item.img}" alt="">
                            <span>${item.describe}</span>
                        </a>
                    </li> 
        `;
    })
    .join("");
}
renderBrandSecondItem(dataBrandSliderSecond);
// render slider third
let dataBrandSliderThird = [
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
const listBrandSliderThird =document.querySelector(".header__bt-right-sliderthird")
const renderBrandThirdItem = (params) =>{
    listBrandSliderThird.innerHTML = params 
    .map((item) => {
        return `
        <li class="header__bt-right-item d-flex flex-column col-3">
                        <a href="#" class="d-flex flex-column align-items-center">
                            <img src="${item.img}" alt="">
                            <span>${item.describe}</span>
                        </a>
                    </li> 
        `;
    })
    .join("");
}
renderBrandThirdItem(dataBrandSliderThird);