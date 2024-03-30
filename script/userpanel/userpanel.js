// select element

const panelElem = document.querySelector(".panel")
const dashboardElem = document.querySelector(".dashboard")
const orderElem = document.querySelector(".orderhistory")
const ticketsElem = document.querySelector(".ticket")


const dashboardbtnElem = document.querySelector(".dashboardbtn")
const orderbtnElem = document.querySelector(".orderbtn")
const ticketbtnElem = document.querySelector(".ticketbtn")
const logoutbtnElem = document.querySelector(".logoutbtn")


function showdashboard()  {
    panelElem.innerHTML = " "
    panelElem.append(dashboardElem)
}
orderbtnElem.addEventListener("click" , () => {
    panelElem.innerHTML = " "
    panelElem.append(orderElem)

})
ticketbtnElem.addEventListener("click" , () => {
    panelElem.innerHTML = " "
    panelElem.append(ticketsElem)

})

dashboardbtnElem.addEventListener("click" , showdashboard)
showdashboard()