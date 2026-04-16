const menuIcon = document.querySelector('#icon');
const mobileMenu = document.querySelector('.mobile-menu');
const menuItem = document.querySelectorAll('.menu-item');

menuIcon.addEventListener('click',() => {
    mobileMenu.classList.toggle('active');
    menuIcon.classList.toggle('open');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
    document.body.classList.toggle('no-scroll');
});

menuItem.forEach(link => {
    link.addEventListener('click',() => {
        mobileMenu.classList.remove('active');
        menuIcon.classList.remove('open');
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-xmark');
        document.body.classList.remove('no-scroll');
    });
});

//smart navbar
const navBar = document.querySelector('#nav-bar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll',() => {
    if(window.scrollY > lastScrollY){
        navBar.classList.add('nav-hidden');
    }
    else{
        navBar.classList.remove('nav-hidden');
    }

    lastScrollY = window.scrollY;
});