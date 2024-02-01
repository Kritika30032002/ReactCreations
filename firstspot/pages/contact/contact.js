const sendLetter = document.getElementById("sendLetter");
const emailInput = document.getElementById("emailInput");


function addClass() {
    document.body.classList.add("sent");
}

sendLetter.addEventListener("click", addClass);

function goToHome() {
    window.location.href = "../../index.html";
}

function addClass(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Validate email format
    const emailValue = emailInput.value.trim();
    if (!isValidEmail(emailValue)) {
        alert("Invalid email address");
        return;
    }

    // Add the "sent" class if the email is valid
    document.body.classList.add("sent");
}

function isValidEmail(email) {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

sendLetter.addEventListener("click", addClass);

