document.addEventListener("DOMContentLoaded", function() { console.log("Script Loaded Successfully"); });

function exploreServices() { window.scrollTo({ top: document.querySelector(".services").offsetTop, behavior: "smooth" }); }

function openRegistration() { alert("Registration functionality coming soon!"); }

function processPayment() { alert("Payment processing will be integrated shortly!"); }

// Smooth scrolling animation const buttons = document.querySelectorAll("button"); buttons.forEach(button => { button.addEventListener("mouseover", () => { button.style.transform = "scale(1.1)"; button.style.transition = "0.3s ease-in-out"; }); button.addEventListener("mouseout", () => { button.style.transform = "scale(1)"; }); });
