// select element

const panelElem = document.querySelector(".panel")
const panelheaderElem = document.querySelector(".header_row")
const ticketHeaderElem = document.querySelector(".ticket_header")
const navbarHeaderElem = document.querySelector(".navbar_panel")
const userlistElem = document.querySelector(".user_list")
const usersElem = document.querySelector(".users")
const ticketsElem = document.querySelector(".tickets")
const productElem = document.querySelector(".product")
const soldElem = document.querySelector(".sold-out")


const dashboardbtnElem = document.querySelector(".dashboardbtn")
const usersbtnElem = document.querySelector(".usersbtn")
const productbtnElem = document.querySelector(".productbtn")
const ticketbtnElem = document.querySelector(".ticketbtn")
const soldoutbtnElem = document.querySelector(".soldoutbtn")


function showdashboard()  {
    panelElem.innerHTML = " "
    panelheaderElem.innerHTML = " "
    panelheaderElem.append(navbarHeaderElem)
    panelElem.append(userlistElem)
}
usersbtnElem.addEventListener("click" , () => {
    panelElem.innerHTML = " "
    panelheaderElem.innerHTML = " "
    panelElem.append(usersElem)
})
productbtnElem.addEventListener("click" , () => {
    panelElem.innerHTML = " "
    panelheaderElem.innerHTML = " "
    panelheaderElem.append(navbarHeaderElem)
    panelElem.append(productElem)
})
ticketbtnElem.addEventListener("click" , () => {
    panelElem.innerHTML = " "
    panelheaderElem.innerHTML = " "
    panelheaderElem.append(ticketHeaderElem)
    panelElem.append(ticketsElem)
})
soldoutbtnElem.addEventListener("click" , () => {
    panelElem.innerHTML = " "
    panelheaderElem.innerHTML = " "
    panelElem.append(soldElem)
})

dashboardbtnElem.addEventListener("click" , showdashboard)
showdashboard()

