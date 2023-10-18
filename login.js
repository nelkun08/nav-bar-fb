//showpassword on eye logo
const showPassword = document.querySelector
    ("#show-password");
const passwordField = document.querySelector
    ("#inputPassword5");

showPassword.addEventListener("click", function () {
    this.classList.toggle("fa-eye-slash");
    const type = passwordField.getAttribute("type")
        === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
})

//validation of username and password
const login = document.getElementById('login')

let username = "ronnelsmith32@gmail.com";
let password = "nelkun";

login.onclick = function () {
    let uname = document.getElementById("exampleFormControlInput1").value;
    let pass = document.getElementById("inputPassword5").value;

    if (uname === username && pass === password)
        location.href = 'index.html';
    else
        alert("Invalid Username or Password");
}


//enter key function as login
let pword = document.getElementById("inputPassword5");
let email = document.getElementById("exampleFormControlInput1");
let loginweb = document.getElementById("login");

pword.addEventListener("keyup", e => {
    e.preventDefault();
    if (e.keyCode === 13) {
        login.onclick()
    }
})
email.addEventListener("keyup", e => {
    e.preventDefault();
    if (e.keyCode === 13) {
        login.onclick()
    }
})