let dataSuggestToday = [
    {
        "id": "1",
        "name": "Điện thoại iPhone 15 Promax 256GB",
        "price": "đ 30,990,000",
        "img": "./img/suggest__today/iphone15.jpg",
        "saleoff": "-10%",
        "sales": "Đã bán 10,8K"
    },
    {
        "id": "1",
        "name": "Điện thoại iPhone 15 Promax 256GB",
        "price": "đ 30,990,000",
        "img": "./img/suggest__today/iphone15.jpg",
        "saleoff": "-10%",
        "sales": "Đã bán 10,8K"
    },
    {
        "id": "1",
        "name": "Điện thoại iPhone 15 Promax 256GB",
        "price": "đ 30,990,000",
        "img": "./img/suggest__today/iphone15.jpg",
        "saleoff": "-10%",
        "sales": "Đã bán 10,8K"
    },
    {
        "id": "1",
        "name": "Điện thoại iPhone 15 Promax 256GB",
        "price": "đ 30,990,000",
        "img": "./img/suggest__today/iphone15.jpg",
        "saleoff": "-10%",
        "sales": "Đã bán 10,8K"
    },
    {
        "id": "1",
        "name": "Điện thoại iPhone 15 Promax 256GB",
        "price": "đ 30,990,000",
        "img": "./img/suggest__today/iphone15.jpg",
        "saleoff": "-10%",
        "sales": "Đã bán 10,8K"
    },
    {
        "id": "1",
        "name": "Điện thoại iPhone 15 Promax 256GB",
        "price": "đ 30,990,000",
        "img": "./img/suggest__today/iphone15.jpg",
        "saleoff": "-10%",
        "sales": "Đã bán 10,8K"
    },
    {
        "id": "1",
        "name": "Điện thoại iPhone 15 Promax 256GB",
        "price": "đ 30,990,000",
        "img": "./img/suggest__today/iphone15.jpg",
        "saleoff": "-10%",
        "sales": "Đã bán 10,8K"
    },
    {
        "id": "1",
        "name": "Điện thoại iPhone 15 Promax 256GB",
        "price": "đ 30,990,000",
        "img": "./img/suggest__today/iphone15.jpg",
        "saleoff": "-10%",
        "sales": "Đã bán 10,8K"
    },
    {
        "id": "1",
        "name": "Điện thoại iPhone 15 Promax 256GB",
        "price": "đ 30,990,000",
        "img": "./img/suggest__today/iphone15.jpg",
        "saleoff": "-10%",
        "sales": "Đã bán 10,8K"
    },
    {
        "id": "1",
        "name": "Điện thoại iPhone 15 Promax 256GB",
        "price": "đ 30,990,000",
        "img": "./img/suggest__today/iphone15.jpg",
        "saleoff": "-10%",
        "sales": "Đã bán 10,8K"
    },
    {
        "id": "1",
        "name": "Điện thoại iPhone 15 Promax 256GB",
        "price": "đ 30,990,000",
        "img": "./img/suggest__today/iphone15.jpg",
        "saleoff": "-10%",
        "sales": "Đã bán 10,8K"
    },
    {
        "id": "1",
        "name": "Điện thoại iPhone 15 Promax 256GB",
        "price": "đ 30,990,000",
        "img": "./img/suggest__today/iphone15.jpg",
        "saleoff": "-10%",
        "sales": "Đã bán 10,8K"
    },
    {
        "id": "1",
        "name": "Điện thoại iPhone 15 Promax 256GB",
        "price": "đ 30,990,000",
        "img": "./img/suggest__today/iphone15.jpg",
        "saleoff": "-10%",
        "sales": "Đã bán 10,8K"
    },
    {
        "id": "1",
        "name": "Điện thoại iPhone 15 Promax 256GB",
        "price": "đ 30,990,000",
        "img": "./img/suggest__today/iphone15.jpg",
        "saleoff": "-10%",
        "sales": "Đã bán 10,8K"
    },
    {
        "id": "1",
        "name": "Điện thoại iPhone 15 Promax 256GB",
        "price": "đ 30,990,000",
        "img": "./img/suggest__today/iphone15.jpg",
        "saleoff": "-10%",
        "sales": "Đã bán 10,8K"
    },
    {
        "id": "1",
        "name": "Điện thoại iPhone 15 Promax 256GB",
        "price": "đ 30,990,000",
        "img": "./img/suggest__today/iphone15.jpg",
        "saleoff": "-10%",
        "sales": "Đã bán 10,8K"
    },
];
const listSuggestToday = document.querySelector(".suggesttoday__list");
const renderSuggestTodayItem = (params) => {
    listSuggestToday.innerHTML = params 
    .map((item) => {
        return`
        <li class="suggesttoday__item h-auto col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
                        <a href="#" class="d-flex flex-column">
                            <div class="suggesttoday__img d-flex flex-column h-auto">
                                <div class="mall w-100 d-flex align-items-center">
                                    <span class="d-flex">Mall</span>
                                    <div class="sale h-auto d-flex align-items-center">
                                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z"
                                                fill="url(#paint0_linear_2216_10611)"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0"
                                                    y2="16" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#EE4D2D"></stop>
                                                    <stop offset="1" stop-color="#FF7337"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span class="sale-off">${item.saleoff}</span>
                                    </div>
                                </div>
                                <img class="suggesttoday__product" src="${item.img}" alt="">
                                <img class="suggesttoday__xtra" src="./img/suggest__today/xtra.png" alt="">
                            </div>
                            <div class="suggesttoday__nameproduct d-flex flex-column">
                                <span class="suggesttoday__name">${item.name}</span>
                                <div class="price-sales d-flex justify-content-between align-items-center">
                                    <span class="price">${item.price}</span>
                                    <small class="sales">${item.sales}</small>
                                </div>
                            </div>
                        </a>
                    </li>
        `;
    }
    )
    .join("")
};
renderSuggestTodayItem(dataSuggestToday);