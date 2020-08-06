var menu = document.getElementById("menu");
var burgerButton = document.getElementById("burger");

burgerButton.addEventListener("click",function(){
    menu.classList.toggle("is-active");
});