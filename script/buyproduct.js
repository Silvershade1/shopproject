import {product} from "../script/userdata.js"
// select element
const addproductelem = document.querySelector(".add-product")
const countproduct = document.querySelector(".product-count")
const nameproduct = document.querySelector(".product_names")
const priceproduct = document.querySelector(".product_price")

function getTicketsFromStorage() {
    const storedTickets = localStorage.getItem("userproduct");
    try {
      return storedTickets ? JSON.parse(storedTickets) : [];
    } catch (error) {
      console.error('Error parsing tickets from localStorage:', error);
      return []; // Return empty array on error
    }
  }
  
  // Global variables with default values
const userproducts = getTicketsFromStorage();
console.log(userproducts);


function addproduct () {
   let userproduct =  {
    id : userproducts.length + 1,
    name : nameproduct.innerHTML ,
    price : priceproduct.textContent ,
    count : Number(countproduct.value)
   }
   userproducts.push(userproduct)
   console.log(userproducts);
   localStorage.setItem("userproduct" , JSON.stringify(userproducts))
}

addproductelem.addEventListener("click" , addproduct)
