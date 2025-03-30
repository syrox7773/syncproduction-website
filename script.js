document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const fullName = form.querySelector("input[placeholder='Full Name']").value;
        const age = form.querySelector("input[placeholder='Age']").value;
        const email = form.querySelector("input[placeholder='Email']").value;
        const instagram = form.querySelector("input[placeholder='Instagram Profile']").value;
        const portfolio = form.querySelector("input[placeholder='Portfolio Link']").value;

        if (!fullName || !age || !email || !instagram || !portfolio) {
            alert("Please fill in all fields before submitting.");
            return;
        }
        
        alert("Application submitted successfully!");
        window.location.href = "payment.html"; // Redirect to payment page
    });
});
