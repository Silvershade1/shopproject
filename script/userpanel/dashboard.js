// select element

const username = document.querySelector(".name_user");
const username1 = document.querySelector(".name-user1");
const userEmail = document.querySelector(".user_email");
const userRole = document.querySelector(".user_role");
const orders = document.querySelector(".orders");


// get in localstorage
let userinfo = JSON.parse(localStorage.getItem("userinfo"))
let userproduct = localStorage.getItem("userproduct")

if (userinfo) {
    showinfo()
} else {
    errorshow()
}

function showinfo () {
    username.textContent = userinfo.name;
    username1.textContent = userinfo.name;
    userEmail.textContent = userinfo.email;
    userRole.textContent = userinfo.role
}

function errorshow () {
    location.href = "./loginpage.html"
    localStorage.removeItem("islogin")
}

// show lastorder

function showLastOrder() {
    userproduct = userproduct ? JSON.parse(userproduct) : [];
    let finalproducts = userproduct.slice(0 , 5)
    let id = 0 
    finalproducts.forEach(product => {
        id++
        orders.insertAdjacentHTML("beforeend" , `<div class="order mt-6">
        <div class="mx-4 flex justify-between">
            <p>#${id}</p>
            <p>${product.name}</p>
            <p>${product.price}</p>
            <p>${product.count}</p>
        </div>
    </div>`)
    }); 
}


showLastOrder();