// Authorisation Tabs
var register = document.getElementById("register")
var log_in = document.getElementById("log_in")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")

function openREG(){
    register.style.transform = "translateX(0)";
    log_in.style.transform = "translateX(200%)";
    btn1.style.backgroundColor = "#1a1a1ae6";
    btn2.style.backgroundColor = "#1a1a1ab3";
}

function openLOGIN(){
    register.style.transform = "translateX(200%)";
    log_in.style.transform = "translateX(0)";
    btn2.style.backgroundColor = "#1a1a1ae6";
    btn1.style.backgroundColor = "#1a1a1ab3";
    
}

// Toggle Password Visibility
const togglePasswordButtonRegister = document.querySelector('#toggle-password');
const closedEyeIconRegister = document.querySelector('#closed-eye');
const openEyeIconRegister = document.querySelector('#open-eye');
const passwordElementRegister = document.querySelector('#password')
let isPassworVisibleRegister = false;

togglePasswordButtonRegister.addEventListener('click', function() {
   if (!isPassworVisibleRegister){
    //make password visible
    passwordElementRegister.type = 'text';
    closedEyeIconRegister.classList.add('hide');
    openEyeIconRegister.classList.remove('hide');
   } else {
    //make password hidden
    passwordElementRegister.type = 'password';
    closedEyeIconRegister.classList.remove('hide');
    openEyeIconRegister.classList.add('hide');
   }
    isPassworVisibleRegister = !isPassworVisibleRegister;
});



const togglePasswordButtonLogin = document.querySelector('#toggle-password-2');
const closedEyeIconLogin = document.querySelector('#closed-eye-2');
const openEyeIconLogin = document.querySelector('#open-eye-2');
const passwordElementLogin = document.querySelector('#password-2')
let isPassworVisibleLogin = false;

togglePasswordButtonLogin.addEventListener('click', function() {
   if (!isPassworVisibleLogin){
    //make password visible
    passwordElementLogin.type = 'text';
    closedEyeIconLogin.classList.add('hide-2');
    openEyeIconLogin.classList.remove('hide-2');
   } else {
    //make password hidden
    passwordElementLogin.type = 'password';
    closedEyeIconLogin.classList.remove('hide-2');
    openEyeIconLogin.classList.add('hide-2');
   }
    isPassworVisibleLogin = !isPassworVisibleLogin;
});

