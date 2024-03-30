

// Element selection
const ticketsContainer = document.querySelector(".ticket_container");
const noTicketError = document.querySelector(".no-ticket");
const popupTicket = document.querySelector("#ticket-popup");
const textTicket = document.querySelector("#ticket-text");
const closeTicket = document.querySelector("#close-ticket-btn");
const alltickettext = document.querySelector(".all-ticket-text");
const readtickettext = document.querySelector(".read-ticket-text");
const onreadtickettext = document.querySelector(".onread-ticket-text");

// Function to retrieve tickets from local storage (handle potential errors)
function getTicketsFromStorage() {
  const storedTickets = localStorage.getItem("ticket");
  try {
    return storedTickets ? JSON.parse(storedTickets) : [];
  } catch (error) {
    console.error('Error parsing tickets from localStorage:', error);
    return []; // Return empty array on error
  }
}

// Global variables with default values
const tickets = getTicketsFromStorage();
let currentTicketId = 35245;
let allticketcount = tickets.length; 
let readticketcount = 0; 




// Function to handle ticket deletion

function removeElement(event) {
  let selectElement = event.target.parentElement.parentElement
  const foundIndex = tickets.findIndex(ticket => ticket.name === selectElement.children[0].textContent); // Access ticket name from closure
  if (foundIndex !== -1) {
    tickets.splice(foundIndex, 1);
    localStorage.setItem("ticket", JSON.stringify(tickets));
    selectElement.remove();
  }
  showcount(readticketcount , allticketcount)
}

// sweet alert founction

function removeticket (event) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
      removeElement(event)
    }
  });
}

// Render tickets or display error message
if (tickets.length === 0) {
  noTicketError.classList.remove("hidden");
} else {
  tickets.forEach(ticket => {
    currentTicketId += 4
    ticketsContainer.insertAdjacentHTML("beforeend" , `<div class="ticket flex justify-between items-center border-b mx-4 border-bordercolor border-solid h-12" data-ticket-id="35245">
    <p>${ticket.name}</p>
    <p>#${currentTicketId}</p>
    <div>
      <i class="fa fa-trash" onclick=" removeticket (event) "></i>
      <i class="fa fa-eye mx-4" onclick="showtext()"></i>
    </div>
  </div>`)
  });
}

// Function to show ticket details in pop-up (assuming ticket data has a "text" property)
function showTicketDetails(ticket) {
  popupTicket.classList.remove("hidden");
  popupTicket.classList.add("flex");
  textTicket.textContent = ticket.text; // Access ticket text property here
}

// Event listener for ticket container click

function showtext (e) {
  const ticketElement = event.target.parentElement.parentElement.children[0];
  const foundIndex = tickets.findIndex(ticket => ticket.name === ticketElement.innerHTML);
  if (foundIndex !== -1) {
    readticketcount++
    showcount(readticketcount , allticketcount)
    showTicketDetails(tickets[foundIndex]); // Pass entire ticket object
  }
}

// Event listener for close button click
closeTicket.addEventListener("click", () => {
  popupTicket.classList.remove("flex");
  popupTicket.classList.add("hidden");
});


function showcount(readticket ,allticket) {
  let onreadticketcount = allticketcount - readticket;
  alltickettext.innerHTML = allticket;
  readtickettext.innerHTML = readticket;
  onreadtickettext.innerHTML = onreadticketcount;
  
}
showcount(readticketcount , allticketcount);