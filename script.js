const menuIcon = document.querySelector("#icon");
const mobileMenu = document.querySelector(".mobile-menu");

menuIcon.addEventListener("click", function(){
    mobileMenu.classList.toggle("active");
    menuIcon.classList.toggle("open");
});

document.querySelectorAll(".menu-item").forEach(link => {
    link.addEventListener("click",() => {
        mobileMenu.classList.remove("active");
        menuIcon.classList.remove("open");
    });
});