document.addEventListener("DOMContentLoaded", function () {
    // Fade-in animation for header and services section
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        setTimeout(() => {
            el.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, 500);
    });

    // Slide-in effect for service cards
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = "translateX(-50px)";
        setTimeout(() => {
            card.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            card.style.opacity = 1;
            card.style.transform = "translateX(0)";
        }, 800 + index * 200);
    });

    // Button hover effect
    const buttons = document.querySelectorAll("button");
    buttons.forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "scale(1.1)";
            btn.style.transition = "transform 0.2s ease-in-out";
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)";
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("a[href^='#']").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
});
