const form = document.getElementById("contactForm");
const dialog = document.getElementById("successDialog");
const closeBtn = document.getElementById("closeDialog");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fields = {
        fullName: "nameError",
        email: "emailError",
        subject: "subjectError",
        message: "messageError",
    };

    // Clear all error messages
    Object.values(fields).forEach((id) => (document.getElementById(id).textContent = ""));

    let valid = true;

    // Validate fields
    for (let key in fields) {
        const value = document.getElementById(key).value.trim();
        const errorBox = document.getElementById(fields[key]);

        if (!value) {
            errorBox.textContent = "This field is required";
            valid = false;
        }
    }

    // Email format check
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && !emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email address";
        valid = false;
    }

    if (valid) {
        form.reset();
        dialog.showModal();
    }
});

// Close dialog
closeBtn.addEventListener("click", () => dialog.close());
