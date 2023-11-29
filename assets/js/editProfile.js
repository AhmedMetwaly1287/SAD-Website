function validateProfileForm() {
    let newPass = document.getElementById("newpass").value;
    let currPass = document.getElementById("currpass").value;
    let errMsg = document.getElementById("errMsg");
    if (currPass === '') {
        errMsg.innerHTML = "Please input current password to save changes";
    }
    else if (currPass.length < 6) {
        errMsg.innerHTML = 'Invalid Current Password';
    }
    else if (newPass === currPass) {
        errMsg.innerHTML = 'New password cannot be the same as current password';
    }
    else if (newPass.length < 6) {
        errMsg.innerHTML = 'New password cannot be less than 6 alpha-numeric characters';
    }
    alert("Changes Saved Successfully!");
    window.location.href = "profile.html";
}