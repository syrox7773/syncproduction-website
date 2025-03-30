document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Form validation and payment redirection
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            
            let name = document.getElementById("name").value.trim();
            let age = document.getElementById("age").value.trim();
            let contact = document.getElementById("contact").value.trim();
            let instagram = document.getElementById("instagram").value.trim();
            let portfolio = document.getElementById("portfolio").value.trim();
            
            if (!name || !age || !contact || !instagram || !portfolio) {
                alert("Please fill in all fields before proceeding.");
                return;
            }

            if (isNaN(age) || age < 18) {
                alert("You must be at least 18 years old to register.");
                return;
            }

            if (!/^\d{10}$/.test(contact)) {
                alert("Please enter a valid 10-digit contact number.");
                return;
            }

            // Redirect to payment page
            alert("Redirecting to payment...");
            window.location.href = "https://payment-gateway-link.com"; // Replace with actual payment gateway URL
        });
    }

    // Dynamically Load Model Images
    const modelsSection = document.getElementById("models");
    if (modelsSection) {
        const models = [
            { name: "Model 1", img: "images/model1.jpg" },
            { name: "Model 2", img: "images/model2.jpg" },
            { name: "Model 3", img: "images/model3.jpg" },
            { name: "Model 4", img: "images/model4.jpg" }
        ];
        
        const modelGrid = document.createElement("div");
        modelGrid.classList.add("model-gallery");
        
        models.forEach(model => {
            const modelDiv = document.createElement("div");
            modelDiv.classList.add("model");
            
            const img = document.createElement("img");
            img.src = model.img;
            img.alt = model.name;
            
            const name = document.createElement("p");
            name.textContent = model.name;
            
            modelDiv.appendChild(img);
            modelDiv.appendChild(name);
            modelGrid.appendChild(modelDiv);
        });
        
        modelsSection.appendChild(modelGrid);
    }
});
