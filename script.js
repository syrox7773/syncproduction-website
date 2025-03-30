document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Simple Form Validation
        let isValid = true;
        const inputs = form.querySelectorAll("input");
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isValid = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "1px solid #666";
            }
        });

        if (!isValid) {
            alert("Please fill out all fields correctly.");
            return;
        }

        // Redirect to Payment Page (Dummy Example)
        alert("Redirecting to payment...");
        window.location.href = "https://paymentgateway.com/checkout"; // Replace with actual payment URL
    });
});
