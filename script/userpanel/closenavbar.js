// select element

const openElem = document.querySelector(".open-navbar")
const navbar = document.querySelector(".rightpanel")
const closeElem = document.querySelector(".closebtn")

openElem.addEventListener("click" , () => {
    navbar.style.left = 0
})
closeElem.addEventListener("click" , () => {
    navbar.style.left = "-700px"
})