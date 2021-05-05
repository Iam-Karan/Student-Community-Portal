var frmlogin = document.getElementById('login-frmlogin');
var frmsignup = document.getElementById('login-frmsignup');
frmsignup.style.display = "none";
function signup(){
  frmlogin.style.display = "none";
  frmsignup.style.display = "flex";
}
function login(){
  frmsignup.style.display = "none";
  frmlogin.style.display = "flex";
}