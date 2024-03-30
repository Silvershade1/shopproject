import { product } from "../userdata.js";

// Select DOM elements
const productListElement = document.querySelector('.product_container');
const paginationElement = document.querySelector('.paginations');

// Define constants for pagination
const rowsPerPage = 7;
let currentPage = 1;

// Function to display products for a given page
function displayProducts(allProducts, container, rowsPerPage, pageNumber) {
  // Clear container content
  container.innerHTML = '';

  // Calculate start and end index for products on current page
  const startIndex = (pageNumber - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Slice product data for current page
  const paginatedProducts = allProducts.slice(startIndex, endIndex);

  // Generate HTML for each product and append to container
  paginatedProducts.forEach(item => {
    const productHTML = `
      <div class="product flex justify-between items-center border-b mx-4 border-bordercolor border-solid h-16">
        <img src="${item.src}" alt="" class="w-14 h-14">
        <p>${item.name}</p>
        <p>${item.price}</p>
        <div>
          <i class="fa fa-trash"></i>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', productHTML);
  });
}

// Function to generate pagination buttons
function createPaginationButtons(allProducts, container, rowsPerPage) {
  // Clear container content
  container.innerHTML = '';

  // Calculate total number of pages
  const totalPages = Math.ceil(allProducts.length / rowsPerPage);

  // Loop through pages and create buttons
  for (let page = 1; page <= totalPages; page++) {
    const button = document.createElement('button');
    button.textContent = page;

    // Add "active" class to current page button
    if (page === currentPage) {
      button.classList.add('active');
    }

    // Add click event listener to handle page change
    button.addEventListener('click', () => {
      currentPage = page;
      displayProducts(allProducts, productListElement, rowsPerPage, currentPage);

      // Update active class on buttons
      const previousActiveButton = container.querySelector('button.active');
      if (previousActiveButton) {
        previousActiveButton.classList.remove('active');
      }
      button.classList.add('active');
    });

    // Append button to container
    container.appendChild(button);
  }
}

// Display initial product data
displayProducts(product, productListElement, rowsPerPage, currentPage);

// Create and display pagination buttons
createPaginationButtons(product, paginationElement, rowsPerPage);
