document.addEventListener("DOMContentLoaded", function () { console.log("Website Loaded Successfully"); });

function exploreServices() { document.getElementById("services").scrollIntoView({ behavior: "smooth" }); }

// Dynamic text effect for the hero section const heroText = document.querySelector(".hero-text"); const textArray = ["Modeling Shoots", "Ramp Walk Training", "Fashion Campaigns", "Studio Setups"]; let textIndex = 0;

function changeHeroText() { heroText.textContent = textArray[textIndex]; textIndex = (textIndex + 1) % textArray.length; } setInterval(changeHeroText, 3000);

// Hover effect on service cards const serviceCards = document.querySelectorAll(".service-card"); serviceCards.forEach(card => { card.addEventListener("mouseover", () => { card.classList.add("highlight"); }); card.addEventListener("mouseout", () => { card.classList.remove("highlight"); }); });
