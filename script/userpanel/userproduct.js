// Select DOM elements
const productListElement = document.querySelector('.list-products');
const paginationElement = document.querySelector('.pagination');

// get from local storage 

function getTicketsFromStorage() {
    const storedTickets = localStorage.getItem("userproduct");
    try {
      return storedTickets ? JSON.parse(storedTickets) : [];
    } catch (error) {
      console.error('Error parsing tickets from localStorage:', error);
      return []; // Return empty array on error
    }
}
const userproducts = getTicketsFromStorage();

// Define constants for pagination
const RowsCount = 8;
let CurrentPage = 1;
let id = 0

// Function to display users for a given page
function displayproduct(allproduct, container, rowsPerPage, pageNumber) {
  // Clear container content
  container.innerHTML = '';

  // Calculate start and end index for users on current page
  const startIndex = (pageNumber - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Slice user data for current page
  const paginatedproduct = allproduct.slice(startIndex, endIndex);

  // Generate HTML for each userproduct and append to container
  paginatedproduct.forEach(order => {
    id++
    const userHTML = `<div class="order mt-7">
    <div class="mx-4 flex justify-between">
        <p>#${id}</p>
        <p>${order.name}</p>
        <p>${order.price}</p>
        <p>${order.count}</p>
        <i class="fa fa-trash remove-item" onclick= "removeproduct(event)"></i>
    </div>
</div>`;
    productListElement.insertAdjacentHTML('beforeend', userHTML);
  });
}

// Function to generate pagination buttons
function createPaginationButtons(allUsers, container, rowsPerPage) {
  // Clear container content
  container.innerHTML = '';

  // Calculate total number of pages
  const totalPages = Math.ceil(allUsers.length / rowsPerPage);

  // Loop through pages and create buttons
  for (let page = 1; page <= totalPages; page++) {
    const button = document.createElement('button');
    button.textContent = page;

    // Add "active" class to current page button
    if (page === CurrentPage) {
      button.classList.add('active');
    }

    // Add click event listener to handle page change
    button.addEventListener('click', () => {
      CurrentPage = page;
      displayproduct(userproducts, productListElement, RowsCount, CurrentPage);


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


// remove element founction

function removeproduct (event) {
  console.log("hello");
  let targetELement = event.target.parentElement.children[1]
  console.log(targetELement.innerHTML);
  let findElement = userproducts.findIndex(item => item.name === targetELement.innerHTML)
  console.log(findElement);
  
  if (findElement != -1) {
    userproducts.splice(findElement , 1)
    localStorage.setItem("userproduct" , JSON.stringify(userproducts))
    displayproduct(userproducts, productListElement, RowsCount, CurrentPage);
    createPaginationButtons(userproducts, paginationElement, RowsCount);
  }
}

// Display initial userproduct data
displayproduct(userproducts, productListElement, RowsCount, CurrentPage);

// Create and display pagination buttons
createPaginationButtons(userproducts, paginationElement, RowsCount);
