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
];
const listSearchTop = document.querySelector(".searchtop__list")
const rendersearchItem = (params) => {
    listSearchTop.innerHTML = params
    .map((item) => {
        return `
        <li class="searchtop__item col-sm-6 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
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

