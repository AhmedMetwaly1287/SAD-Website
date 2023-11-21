function verifyForm() {
    let password = document.getElementById("password").value;
    let password_confirm = document.getElementById("password_confirm").value;
    let error_message = document.getElementById("error_message");

    if (password.length < 6) {
        error_message.innerHTML = "Invalid Credentials";
        return false;
    }

    if (password != password_confirm) {
        error_message.innerHTML = "Passwords don't match";
        return false;
    }

    window.location.href = "index.html";
    return true;
}

document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();

    if (verifyForm()) {
        document.getElementById("signup-form").submit();
    }
});