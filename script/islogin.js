let navbar = document.querySelector(".navbar_icons")
let loginbtn = document.querySelector(".login_btn")
let dashboard = document.querySelector(".dashboards")
let islogin = localStorage.getItem("islogin")
let loginsbtn = document.querySelector(".loginbtns")
let dashboardbtn = document.querySelector(".dashboardbtn")
let dashboardbtns = document.querySelector(".dashboardbtns")





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



window.addEventListener("load" , () =>  {
    if (islogin) {
        navbar.style.display = "block"
        loginbtn.style.display = "none"
        dashboard.style.display = "block"
        loginsbtn.style.display = "none"
    }
})
