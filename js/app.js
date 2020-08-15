var menu = document.getElementById("menu");
var burgerButton = document.getElementById("burger");
var linkslocales = document.getElementsByClassName("link");

burgerButton.addEventListener("click",function(){
    menu.classList.toggle("is-active");
});
for(var i = 0; i<linkslocales.length; i++)
linkslocales[i].addEventListener("click",function(){
    if(window.innerWidth<768){
        menu.classList.toggle("is-active");
    }
});