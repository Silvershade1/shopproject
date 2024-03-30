// select element

const logoutelem = document.querySelector(".logoutbtn");

logoutelem.addEventListener("click" , () => {
  Swal.fire({
    title: "Are you sure?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes!"
  }).then((result) => {
    if(result.isConfirmed === true) {
      logout()
    }
  });
  
})

function logout () {
  localStorage.removeItem("islogin") 
  localStorage.removeItem("userinfo")
  location.href = "../index.html" 
}