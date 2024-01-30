const btnOpenLogin = document.getElementById('login')
const btnCloseLogin = document.querySelector('.login-popup--close');
const formLogin = document.getElementById('loginForm');
const btnPopLogin = document.getElementById('login-popup');
const verifyLogged = () => {
  const user = localStorage.getItem("loggedUser");
  if (user) {
    btnOpenLogin.innerText = user;
  }
}
const openLogin = () => {
  btnPopLogin.setAttribute('aria-hidden', 'false');
}
const closeLogin = () => {
  btnPopLogin.setAttribute('aria-hidden', 'true');
}
const submitLogin = (event) => {
  event.preventDefault();
  const formData = new FormData(formLogin);
  localStorage.setItem('loggedUser', formData.get('username'));
  closeLogin();
  verifyLogged();
}

document.addEventListener('DOMContentLoaded', () => {
  verifyLogged();

  formLogin.addEventListener('submit', submitLogin);
  btnOpenLogin.addEventListener('click', openLogin);
  btnCloseLogin.addEventListener('click', closeLogin);
})
