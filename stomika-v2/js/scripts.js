// function navSlide() {
//     const burger = document.querySelector(".burger");
//     const nav = document.querySelector(".nav-links");
//     const navLinks = document.querySelectorAll(".nav-links li");
    
//     burger.addEventListener("click", () => {
//         //Toggle Nav
//         nav.classList.toggle("nav-active");
        
//         //Animate Links
//         navLinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = ""
//             } else {
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
//             }
//         });
//         //Burger Animation
//         burger.classList.toggle("toggle");
//     });
    
// }

// navSlide();

window.addEventListener("scroll", function(){
    const menu = document.querySelector(".top-nav-wrapper");
    menu.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener('DOMContentLoaded', () => {
    burger = document.querySelector('.header-burger');
    menu = document.querySelector('.top-nav-wrapper'),
    body = document.querySelector('body');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('lock');
    });
})