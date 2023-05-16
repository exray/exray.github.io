window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

function animateAdvantagesOnScroll() {
    const elements = document.querySelectorAll(".advantages");
    const windowHeight = window.innerHeight;

    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const distanceFromTop = rect.top;

        if (distanceFromTop - windowHeight <= 0) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    });
}

function animateRoomsOnScroll() {
    const rooms_photo = document.querySelectorAll(".rooms__room img");
    const rooms_text = document.querySelectorAll(".rooms__room p");
    const windowHeight = window.innerHeight;

    rooms_photo.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const distanceFromTop = rect.top;

        if (distanceFromTop - windowHeight <= 0) {
            if (index % 2 === 0) {
                element.classList.add("animate-right");
            } else {
                element.classList.add("animate-left");
            }
        } else {
            element.classList.remove("animate-right", "animate-left");
        }
    });

    rooms_text.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const distanceFromTop = rect.top;

        if (distanceFromTop - windowHeight <= 0) {
            if (index % 2 === 0) {
                element.classList.add("animate-right");
            } else {
                element.classList.add("animate-left");
            }
        } else {
            element.classList.remove("animate-right", "animate-left");
        }
    });
}

window.addEventListener("scroll", animateAdvantagesOnScroll);
window.addEventListener("scroll", animateRoomsOnScroll);

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel', {
        lazyLoad: 'nearby',
        // heightRatio: 0.5,
        type: 'loop',
        width: '40vw',
    } ).mount();
} );