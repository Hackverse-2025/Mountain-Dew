// script.js

// Typing Effect for Hero Section
const text = "AI-Powered Homework & Assignment Solver!";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

// Dark Mode Toggle
const darkModeButton = document.getElementById("toggle-dark-mode");
darkModeButton.addEventListener("click", function() {
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-light");
    document.body.classList.toggle("bg-light");
    document.body.classList.toggle("text-dark");
});

// Progress Bar Animation for File Upload
document.querySelectorAll("input[type='file']").forEach(input => {
    input.addEventListener("change", function() {
        const progressBar = this.nextElementSibling.querySelector(".progress-bar");
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
            } else {
                width += 10;
                progressBar.style.width = width + "%";
            }
        }, 200);
    });
});
