const navbarTrigger = document.getElementById("navbar-trigger");
const hiddenNavbarBase = document.querySelector(".hidden-nav-base");
const hiddenNavbar = document.querySelector(".hidden-nav");

navbarTrigger.addEventListener("click" , () => {
    hiddenNavbarBase.style.display = "block";
    hiddenNavbar.style.display = "flex";

    hiddenNavbarBase.style.animation = "showNavbarBase 0.4s ease-in forwards";
    hiddenNavbar.style.animation = "showHiddenNavbar 0.4s ease-in forwards";


});

hiddenNavbarBase.addEventListener("click" , () => {
    hiddenNavbarBase.style.animation = "hideNavbarBase 0.4s ease-in forwards";
    hiddenNavbar.style.animation = "hideHiddenNavbar 0.4s ease-in forwards";

    setTimeout(() => {
        hiddenNavbarBase.style.display = "none";
        hiddenNavbar.style.display = "none";
    } , 400)
})

hiddenNavbar.addEventListener("click" , (event) => {
    event.stopPropagation();
})