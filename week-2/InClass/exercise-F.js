function checkuser(username) {
    if (username[0]=== username[0].toUpperCase() && username.lenght > 5 && username.lenght < 10) {

    return "Valid username";
    }
}

console.log(checkuser("Bummer"))