function validateFile() {
    let uploadedMedia = document.getElementById('media');
    let file = uploadedMedia.files[0];
    let errMsg = document.getElementById("errMsg")
    if (!file) {
        errMsg.innerHTML = 'Please select a file to be uploaded!';
        return;
    }
    let allowedFormats = ['jpg', 'jpeg', 'png', 'gif', 'mp4', 'avi', 'mov', 'mkv','webp','webm'];
    let fileExt = file.name.split('.').pop().toLowerCase();
    if (!allowedFormats.includes(fileExt)) {
        errMsg.innerHTML = 'Invalid Media file format';
        return;
    }
    alert("Post uploaded successfully!");
    window.location.href = "index.html";
}
