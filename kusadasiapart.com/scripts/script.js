window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

function animateAdvantagesOnScroll() {
    const elements = document.querySelectorAll(".advantages-other");
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
    const elements = document.querySelectorAll(".rooms-photos img");
    const windowHeight = window.innerHeight;

    elements.forEach((element, index) => {
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
