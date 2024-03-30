import { users } from "./userdata.js";

// Select elements once at the beginning
const EmailElem = document.querySelector(".email_input");
const PasswordElem = document.querySelector(".password_input");
const ButtonElem = document.querySelector(".button");
const PElem = document.querySelector(".email_error");

ButtonElem.addEventListener("click", () => {
  const emailValue = EmailElem.value.trim(); // Trim whitespace
  const passwordValue = PasswordElem.value;

  // Validate input (combined email and password check)
  if (!emailValue || !passwordValue) {
    PElem.textContent = "Enter your email and password";
    PElem.style.display = "block";
    return; // Exit early if validation fails
  }

  // Efficiently find user using findIndex and destructuring
  const userIndex = users.findIndex(({ email }) => email === emailValue);

  if (userIndex === -1) {
    PElem.textContent = "No information found";
    PElem.style.display = "block";
    return; // Exit early if user not found
  }

  const User = users[userIndex]; // Destructuring for concise user access
  console.log(User);
  // Authenticate user
  Authenticate(User, passwordValue);
});

function Authenticate(user, passwordValue) {
  if (user.password === passwordValue) {
    window.location.href = "../index.html";
    localStorage.setItem("islogin", "true");
    localStorage.setItem("userinfo" , JSON.stringify(user))
  } else {
    PElem.textContent = "Incorrect password";
    PElem.style.display = "block";
  }
}
