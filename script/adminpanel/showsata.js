// select element

const productsale = document.querySelector(".product_sale");
const totalproduct = document.querySelector(".total_sale");

// Function to retrieve tickets from local storage (handle potential errors)
function getTicketsFromStorage() {
    const storedproduct = localStorage.getItem("userproduct");
    try {
      return storedproduct ? JSON.parse(storedproduct) : [];
    } catch (error) {
      console.error('Error parsing tickets from localStorage:', error);
      return []; // Return empty array on error
    }
  }
  
  // Global variables with default values
const products = getTicketsFromStorage();
let sum = 0 

function calcproduct () {
    products.forEach(element => {
       let price =  element.price.slice(1)
        let toatal = element.count * price
        sum += toatal
    });
    showdom(sum)
}

function showdom (price) {
    totalproduct.innerHTML = `$ ${price}`;
    productsale.innerHTML = products.length
}

calcproduct()