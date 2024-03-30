import {product} from "../script/userdata.js"

// select element 
const productrow = document.querySelector(".products_row")

let finalproduct = product.slice(0 , 8)
finalproduct.forEach((item) => {
    let itemsrc = item.src.slice(1)
    productrow.insertAdjacentHTML('beforeend' , `<div class="product w-[350px] border border-solid border-gray-300 mt-4">
    <img src="${itemsrc}" alt="">
        <div class="product_infos">
            <div class="product_info">
                <a href="./public/product.html?id=${item.id}">
                    <p class="prodect_name">${item.name}</p>
                </a>
                    <div>
                        <p class="product_price">$ ${item.price}</p>
                        <p class="product_offer">$20.99</p>
                    </div>
                    <img src="./image/Rating.png" alt="">
                </div>
            <div class="product_buy">
                <img src="./image/Rectangle.png" alt="">
        </div>
  </div>
</div>`)
})
