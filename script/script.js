// timer
// select element

let dayELem = document.querySelector(".day")
let hourELem = document.querySelector(".hour")
let minuteELem = document.querySelector(".minute")
let navbar = document.querySelector(".navbar_icons")
let loginbtn = document.querySelector(".login_btn")
let islogin = localStorage.getItem("islogin")
let dashboardbtn = document.querySelector(".dashboardbtn")
let dashboardbtns = document.querySelector(".dashboardbtns")

let endday = "31 mar 2024 13:49:1"
let end= new Date(endday)




setInterval(function(){
    let now = new Date()

    // convert time
    let diff = (end - now) / 1000 ;
    let day = Math.floor(diff/ 3600 / 24);
    let hour = Math.floor(diff/ 3600) % 24;
    let minute = Math.floor(diff/ 60) % 60;
    let second = Math.floor(diff) % 60;
    
    if (day <= 0 && hour <= 0 && minute <= 0 && second <= 0) {
        end =new Date(end.getTime() + 86400000) 
    }
    else {
        
        dayELem.innerHTML = day
        hourELem.innerHTML = hour
        minuteELem.innerHTML = minute
        secondELem.innerHTML = second

    }



    
} , 1000)



// close panel

let closebtn = document.querySelector(".close_btn")
let popup = document.querySelector(".popup")
let openbtn = document.querySelector(".openpopup")


closebtn.addEventListener("click" , () => {
    popup.style.display = "none"
})

openbtn.addEventListener("click" , () => {
    popup.style.display = "block"
})



//  hacndle admin

console.log(dashboardbtn);
if (islogin === "true") {
    let userinfo = JSON.parse(localStorage.getItem("userinfo"))
    if (userinfo.role == "admin") {
        dashboardbtn.href = "./public/cms.html"
        dashboardbtns.href = "./public/cms.html"
    } else {
        dashboardbtn.href = "./public/Dashborad.html"
        dashboardbtns.href = "./public/Dashborad.html"
    }
}