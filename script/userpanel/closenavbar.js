
const openElem = document.querySelector(".open-navbar");
const navbars = document.querySelector(".rightpanel");
const closeElem = document.querySelector(".closebtn");

openElem.addEventListener("click" , () => {
    navbars.style.left = 0
})
closeElem.addEventListener("click" , () => {
    navbars.style.left = "-700px"
})
