const nameError = document.getElementById("name-error");
const contactError = document.getElementById("number-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName() {
    const name = document.getElementById("full-name").value;

    if (name.length == 0) {
        nameError.innerHTML = "Name can't be blank";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "write full name";
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    const contact = document.getElementById("phone-id").value;

    if (contact.length == 0) {
        contactError.innerHTML = "Phone no is required";
        return false;
    }
    if (contact.length != 10) {
        contactError.innerHTML = "Phone no should be 10 degit";
        return false;
    }
    if (!contact.match(/^[0-9]{10}$/)) {
        contactError.innerHTML = "Phone no is required";
        return false;
    }
    contactError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    const email = document.getElementById("email-id").value;

    if (email.length == 0) {
        emailError.innerHTML = "Email can't be blank";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email invalide";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage() {
    const message = document.getElementById("message").value;
    const required = 30;
    const left = (required - message.length);

    if (left > 0) {
        messageError.innerHTML = left + "more charector required";
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fixe error to submit"
        setTimeout(function () {
            submitError.style.display = "none";
        }, 3000)
        return false;
    }
    alert("Your form submit sucessfully");
}