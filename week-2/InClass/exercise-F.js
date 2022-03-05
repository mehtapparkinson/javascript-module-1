/* @param {string} username */
/* @param {string} usertype */


function checkuser(username, usertype) {
    if (
        username[0] === username[0].toUpperCase() && 
        username.length > 5 && 
        username.length < 10 && 
        (usertype === "admin" || 
        usertype === "manager")) {

    return "Valid username";
    }
    else {
        return "invalid username"
    }
}

console.log(checkuser("Bumbum", "admin"))
console.log(checkuser("pooppooppoop", "manager"))
console.log(checkuser("Bum", "manager"))
console.log(checkuser("Bumbum", "student"))

