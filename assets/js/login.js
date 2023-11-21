function verifyForm() {
    let password = document.getElementById("password").value;
    let error_message = document.getElementById("error_message");

    if (password.length < 6) {
        error_message.innerHTML = "Invalid Credentials";
        return false;
    }
    else {
        window.location.href = "index.html";
        return true;
    }
}
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();

    verifyForm();
});