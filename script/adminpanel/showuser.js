// Import user data (replace with actual import path)
import { users } from "../userdata.js";

// Select DOM elements
const userListElement = document.querySelector('.userrow');
const paginationElement = document.querySelector('.pagination');

// Define constants for pagination
const RowsCount = 8;
let CurrentPage = 1;

// Function to display users for a given page
function displayUsers(allUsers, container, rowsPerPage, pageNumber) {
  // Clear container content
  container.innerHTML = '';

  // Calculate start and end index for users on current page
  const startIndex = (pageNumber - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Slice user data for current page
  const paginatedUsers = allUsers.slice(startIndex, endIndex);

  // Generate HTML for each user and append to container
  paginatedUsers.forEach(user => {
    const userHTML = `
      <div class="user flex justify-between mx-4 h-20 items-center text-grays6 border-b border-bordercolor border-solid max-xd:text-[10px] max-sm:text-xs">
        <h3 class="text-grays3 w-24">${user.name}</h3>
        <p class="userid max-sm:ml-4">${user.id}</p>
        <p class="contry">iran</p>
        <p class="createdate">24,oct,2015</p>
        <p class="role max-sm:mr-4">${user.role}</p>
        <div class="action flex text-[#C5CEE0]">
          <i class="fa fa-edit mr-5"></i>
          <i class="fa fa-trash"></i>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', userHTML);
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
      displayUsers(allUsers, userListElement, rowsPerPage, CurrentPage);

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

// Display initial user data
displayUsers(users, userListElement, RowsCount, CurrentPage);

// Create and display pagination buttons
createPaginationButtons(users, paginationElement, RowsCount);
