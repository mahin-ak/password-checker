function checkPasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    if (strength <= 2) return "Weak 😡";
    else if (strength <= 4) return "Medium 😐";
    else return "Strong 💪";
}

// Input from user (Node.js)
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your password: ", function(password) {
    console.log("Password Strength:", checkPasswordStrength(password));
    rl.close();
});