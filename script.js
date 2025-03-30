document.addEventListener("DOMContentLoaded", function () {
    const exploreBtn = document.getElementById("explore-btn");

    exploreBtn.addEventListener("click", function () {
        alert("Welcome to SyncProduction! Explore our services.");
    });

    // Animate services on scroll
    const serviceCards = document.querySelectorAll(".service-card");
    window.addEventListener("scroll", function () {
        serviceCards.forEach((card) => {
            let position = card.getBoundingClientRect().top;
            let screenHeight = window.innerHeight;

            if (position < screenHeight - 100) {
                card.style.transform = "translateY(0)";
                card.style.opacity = "1";
            }
        });
    });
});
