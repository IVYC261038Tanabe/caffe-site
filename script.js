document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const nav = document.querySelector(".nav");

    if (menuButton && nav) {
        menuButton.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("open");
            menuButton.setAttribute("aria-expanded", String(isOpen));
        });
    }

    const cafeCards = document.querySelectorAll(".cafe-card");

    cafeCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 150);
    });
});
