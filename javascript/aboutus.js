var devone = document.getElementById('dev-one');
var devsecond = document.getElementById('dev-two');
devsecond.style.display = "none"; 
function seconddev(){
  devone.style.display = "none";
  devsecond.style.display = "list-item";
}
function firstdev(){
  devsecond.style.display = "none";
  devone.style.display = "list-item";
}