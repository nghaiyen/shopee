let dataFlashSale = [
    {
        "id": "1",
        "img": "./img/flashsale/product-1.jpg",
        "price": "đ1.890.000",
        "sale-off": "51%",
        "sold": "Đã bán 12",
    },
];
const listFlashsale = document.querySelector(".flashsale__product")
const renderFlashsaleItem = (params) => {
    listFlashsale.innerHTML = params
        .map((item) => {
            return `
        <li class="product__item col-2">
                        <a href="#">
                            <div class="product__img w-100">
                                <div class="mall">
                                    <span>Mall</span>
                                </div>
                                <div class="sale">
                                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" fill="url(#paint0_linear_2216_10611)"></path><defs><linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#EE4D2D"></stop><stop offset="1" stop-color="#FF7337"></stop></linearGradient></defs></svg>
                                    <span>${item.sold}</span>
                                </div>
                                <img class="i-product" src="${item.img}" alt="${item.name}">
                                <img src="./img/flashsale/xtra.png" alt="">
                            </div>
                            <span class="price"></span>
                            <div class="sold">
                                <div class="sold___shape"></div>
                                <span></span>
                                </div>
                        </a>
                    </li>
        `;
        })
        .join("");
    }
renderFlashsaleItem(dataFlashSale);
