function triggerFollowState() {
    let followState = document.getElementById("followState");
    let currFollowState = followState.textContent.trim().toLowerCase();
    if (currFollowState === 'follow') {
        followState.textContent = "Unfollow";
    } else if (currFollowState === 'unfollow') {
        followState.textContent = "Follow";
    }
}