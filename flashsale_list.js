let dataFlashSale = [
    {
        "id": "1",
        "img": "./img/flashsale/product-1.jpg",
        "price": "đ 1.890.000",
        "saleoff": "-51%",
        "sold": "Đã bán 122",
    },
    {
        "id": "1",
        "img": "./img/flashsale/product-1.jpg",
        "price": "đ 1.890.000",
        "saleoff": "-51%",
        "sold": "Đã bán 122",
    },
    {
        "id": "1",
        "img": "./img/flashsale/product-1.jpg",
        "price": "đ 1.890.000",
        "saleoff": "-51%",
        "sold": "Đã bán 122",
    },
    {
        "id": "1",
        "img": "./img/flashsale/product-1.jpg",
        "price": "đ 1.890.000",
        "saleoff": "-51%",
        "sold": "Đã bán 122",
    },
    {
        "id": "1",
        "img": "./img/flashsale/product-1.jpg",
        "price": "đ 1.890.000",
        "saleoff": "-51%",
        "sold": "Đã bán 122",
    },
    {
        "id": "1",
        "img": "./img/flashsale/product-1.jpg",
        "price": "đ 1.890.000",
        "saleoff": "-51%",
        "sold": "Đã bán 122",
    },
];
const listFlashsale = document.querySelector(".flashsale__product")
const renderFlashsaleItem = (params) => {
    listFlashsale.innerHTML = params
        .map((item) => {
            return `
        <li class="product__item">
                        <a href="#" class="d-flex flex-column justify-content-center align-items-center w-100">
                            <div class="product__img w-100">
                                <div class="mall w-100 d-flex align-items-center">
                                    <span class="d-flex">Mall</span>
                                <div class="sale h-auto d-flex align-items-center">
                                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" fill="url(#paint0_linear_2216_10611)"></path><defs><linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#EE4D2D"></stop><stop offset="1" stop-color="#FF7337"></stop></linearGradient></defs></svg>
                                    <span class="sale-off">${item.saleoff}</span>
                                </div>
                                </div>
                                
                                <img class="i-product w-100" src="${item.img}" alt="${item.name}">
                                <img class="w-100"src="./img/flashsale/xtra.png" alt="">
                            </div>
                            <span class="price orange-color">${item.price}</span>
                            <div class="sold">
                                <div class="sold___shape"></div>
                                <span class="w -100 orange-color">${item.sold}</span>
                                </div>
                        </a>
                    </li>
        `;
        })
        .join("");
}
renderFlashsaleItem(dataFlashSale);
