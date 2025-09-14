// ----------------------------
// Part 1: Event Handling Example
// ----------------------------
const clickButton = document.getElementById("clickButton");
const clickMessage = document.getElementById("clickMessage");

clickButton.addEventListener("click", () => {
    clickMessage.textContent = "Button clicked! 🎉";
});

// ----------------------------
// Part 2: Light/Dark Mode Toggle
// ----------------------------
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// ----------------------------
// Part 2: Counter Feature
// ----------------------------
let counter = 0;
const counterValue = document.getElementById("counterValue");
document.getElementById("increase").addEventListener("click", () => {
    counter++;
    counterValue.textContent = counter;
});
document.getElementById("decrease").addEventListener("click", () => {
    counter--;
    counterValue.textContent = counter;
});

// ----------------------------
// Part 3: Form Validation
// ----------------------------
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent default submission

    let isValid = true;

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    formSuccess.textContent = "";

    // Name validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = "Enter a valid email.";
        isValid = false;
    }

    // Password validation (min 6 chars)
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    if (isValid) {
        formSuccess.textContent = "Form submitted successfully! ✅";
        form.reset();
    }
});
