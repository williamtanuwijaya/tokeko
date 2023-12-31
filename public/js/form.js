let i = 0;
const login_btn = document.querySelector('#login-btn');
const register_btn = document.querySelector('#register-btn');
const kontainer = document.querySelector('.kontainer');
const btnMenuLogin = document.getElementById('btnMenuLogin');
const btnMenuRegister = document.getElementById('btnMenuRegister');
const signup_button = document.getElementById('signup-button');

let arrayInputName = [];
let arrayInputEmail = [];
let arrayInputNoHp = [];
let arrayInputPassword = [];

for(let j = 0 ; j < localStorage.length ; j++){
  arrayInputEmail.push(localStorage.getItem("email-"+j));
  arrayInputName.push(localStorage.getItem("nama-"+j));
  arrayInputNoHp.push(localStorage.getItem("noHp-"+j));
  arrayInputPassword.push(localStorage.getItem("password-"+j));
}

// Jika belum mengisi semua kolom di register
const form_register = document.getElementById('register').addEventListener('submit', function (event) {
  event.preventDefault();

  let inputName = document.getElementById('name').value;
  let inputNoHp = document.getElementById('nohp').value;
  let inputEmail = document.getElementById('email_signup').value;
  let inputPassword = document.getElementById('psw_signup').value;

  if (inputName === '' || inputNoHp === '' || inputEmail === '' || inputPassword === '') {
    alert('Please fill in all fields.');
    kontainer.classList.add('register-mode');
    return;
  } else if (arrayInputEmail.includes(inputEmail)) {
    alert(inputEmail + ' is already registered.');
    kontainer.classList.add('register-mode');
    return;
  }
  i++;
  localStorage.setItem("nama-"+i,inputName);
  localStorage.setItem("email-"+i,inputEmail);
  localStorage.setItem("noHp-"+i,inputNoHp);
  localStorage.setItem("password-"+i,inputPassword);

  document.getElementById('name').value = '';
  document.getElementById('nohp').value = '';
  document.getElementById('email_signup').value = '';
  document.getElementById('psw_signup').value = '';

  alert(inputEmail + ' Thanks for registration. \nTry to login Now');
  kontainer.classList.remove('register-mode');
});

const form_login = document.getElementById('login').addEventListener('submit', function (event) {
  event.preventDefault();

  let inputEmail = document.getElementById('email_signin').value;
  let inputPassword = document.getElementById('psw_signin').value;
  let i = arrayInputEmail.indexOf(inputEmail);

  if (arrayInputEmail.includes(inputEmail)) {
    if (arrayInputPassword[i] !== inputPassword) {
      alert('Incorrect password.');
      window.location.href = '/';
      return;
    }

    alert(inputEmail + ' you are logged in. \nWelcome to our website.');
    window.location.href = '/dasboard';
  } else {
    alert('Email not found.');
    window.location.href = '/';
    return;
  }

  document.getElementById('email_signin').value = '';
  document.getElementById('psw_signin').value = '';
});

register_btn.addEventListener('click', () => {
  kontainer.classList.add('register-mode');
});

btnMenuRegister.addEventListener('click', () => {
  kontainer.classList.add('register-mode');
});

btnMenuLogin.addEventListener('click', () => {
  kontainer.classList.remove('register-mode');
});

signup_button.addEventListener('click', () => {
  kontainer.classList.remove('register-mode');
});

login_btn.addEventListener('click', () => {
  kontainer.classList.remove('register-mode');
});
