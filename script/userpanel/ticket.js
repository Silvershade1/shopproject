// Select DOM elements using a consistent naming convention
const addTicketButton = document.querySelector('.addticket');
const ticketPopup = document.querySelector('#ticket-popup');
const closeButton = document.querySelector('.closesbtn');
const submitButton = document.querySelector('.ticketinput');
const nameInput = document.querySelector('.nameinput');
const textInput = document.querySelector('.textinput');
const ticketwrap = document.querySelector('.ticketwrap');
const allticket = document.querySelector('.allticket_count');
const unreadticket = document.querySelector('.unreadticket_count');
const readticket = document.querySelector('.readticket_count');
console.log(allticket , readticket , unreadticket);


// global variable
let allticketcount = 0
let readticketcount = 0
let unreadticketcount = 0

// Function to toggle ticket popup visibility
function hiddenTicketPopup() {
  ticketPopup.classList.remove('flex');
  ticketPopup.classList.add('hidden');
}

function showticketpopup () {
  ticketPopup.classList.remove('hidden');
  ticketPopup.classList.add('flex');
}

// Function to clear ticket form fields
function clearTicketForm() {
  nameInput.value = '';
  textInput.value = '';
}

// Function to handle ticket submission
function submitTicket() {
  // Retrieve tickets from local storage (handle potential errors)
  let tickets;
  try {
    tickets = JSON.parse(localStorage.getItem('ticket')) ?? [];
  } catch (error) {
    tickets = []; // Initialize empty array if parsing fails
  }

  // Create ticket object
  const newTicket = {
    name: nameInput.value,
    text: textInput.value,
  };

  // Add new ticket to the ticket array
  tickets.push(newTicket);

  // Store updated tickets in local storage (handle errors)
  try {
    localStorage.setItem('ticket', JSON.stringify(tickets));
  } catch (error) {
    console.error('Error storing tickets in localStorage:', error);
  }

  // Clear form and close popup
  clearTicketForm();
  hiddenTicketPopup();
  showcount();
}

// show count 
function showcount () {
    let tickets = JSON.parse(localStorage.getItem("ticket")) ?? [];
    allticketcount = tickets.length 
    allticket.innerHTML = allticketcount
    unreadticket.innerHTML = allticketcount - readticketcount
    readticket.innerHTML = readticketcount
}

// Event listeners
addTicketButton.addEventListener('click', showticketpopup);
closeButton.addEventListener('click', hiddenTicketPopup);
submitButton.addEventListener('click', submitTicket);
showcount()
