import { product } from "./userdata.js";

// select element
let products = document.querySelector(".products")



product.forEach((item ) => {
    products.insertAdjacentHTML('beforeend' , `<div class="product w-80 max-lg:w-52 max-md:w-40 border border-solid border-gray-300 mt-4">
    <img src="${item.src}" alt="">
        <div class="product_infos">
            <div class="product_info">
                <a href="../public/product.html?id=${item.id}">
                    <p class="prodect_name">${item.name}</p>
                </a>
                    <div>
                        <p class="product_price">${item.price}</p>
                        <p class="product_offer">$20.99</p>
                    </div>
                    <img src="../image/Rating.png" alt="">
                </div>
            <div class="product_buy">
                <img src="../image/Rectangle.png" alt="">
        </div>
  </div>
</div>`)
})
