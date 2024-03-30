// Import product data from a separate file
import { product } from "../script/userdata.js";

// Select elements using descriptive names
const productImage = document.querySelector(".image-prodcut"); // Corrected typo
const productName = document.querySelector(".product_names"); // Removed unnecessary plural
const productPrice = document.querySelector(".product_price");

// Extract logic for getting product ID from URL
function getProductIdFromUrl() {
  const urlParams = new URLSearchParams(location.search);
  return urlParams.get("id");
}

// Find product by ID with error handling
function findProduct() {
  const productId = getProductIdFromUrl();
  const foundProduct = product.find(item => item.id === productId);

  if (!foundProduct) {
    console.error("Product with ID", productId, "not found");
    return; // Exit function if product is not found
  }
  showProduct(foundProduct);
}

// Display product details on the page
function showProduct(product) {
  productImage.src = product.src;
  productName.textContent = product.name;
  productPrice.textContent = product.price;
}

// Call the function to find and display product
findProduct();
