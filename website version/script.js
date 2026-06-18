function togglePassword() {
    let x = document.getElementById("password");

    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function checkPassword() {
    let password = document.getElementById("password").value;

    let score = 0;
    let missing = [];

    if (password.length >= 8) {
        score++;
    } else {
        missing.push("Minimum 8 characters");
    }

    if (/[A-Z]/.test(password)) {
        score++;
    } else {
        missing.push("Uppercase letter");
    }

    if (/[a-z]/.test(password)) {
        score++;
    } else {
        missing.push("Lowercase letter");
    }

    if (/[0-9]/.test(password)) {
        score++;
    } else {
        missing.push("Number");
    }

    if (/[!@#$%^&*]/.test(password)) {
        score++;
    } else {
        missing.push("Special character");
    }

    let strength = "Weak";
    let color = "red";

    if (score === 5) {
        strength = "Strong";
        color = "green";
    } else if (score >= 3) {
        strength = "Medium";
        color = "orange";
    }

    document.getElementById("result").innerText =
        "Password Strength: " + strength;
    document.getElementById("result").style.color = color;

    document.getElementById("score").innerText =
        "Score: " + score + "/5";

    if (missing.length > 0) {
        document.getElementById("missing").innerHTML =
            "<b>Missing Requirements:</b><br>- " +
        missing.join("<br>- ");
    } else {
        document.getElementById("missing").innerHTML =
            "<b>Missing Requirements:</b><br>None";
    }

    let tips = [
        "Avoid using your name in passwords.",
        "Never use your birth year.",
        "Use different passwords for different websites.",
        "Enable Multi-Factor Authentication.",
        "Long passwords are harder to crack."
    ];

    let randomTip = tips[Math.floor(Math.random() * tips.length)];

    document.getElementById("tip").innerHTML =
        "<b>Cybersecurity Tip:</b> " + randomTip;
}