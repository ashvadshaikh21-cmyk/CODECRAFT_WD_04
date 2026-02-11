// Typing Effect
const textArray = ["Web Developer", "Frontend Enthusiast", "Problem Solver"];
let typingIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function type() {
    if (charIndex < textArray[typingIndex].length) {
        typingElement.textContent += textArray[typingIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent =
            textArray[typingIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        typingIndex = (typingIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);

// Dark Mode Toggle
document.getElementById("darkToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Scroll Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// Contact Form Validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const errors = document.querySelectorAll(".error");

    errors.forEach(err => err.textContent = "");

    if (name.value.trim() === "") {
        errors[0].textContent = "Name is required";
        valid = false;
    }

    if (!email.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
        errors[1].textContent = "Valid email required";
        valid = false;
    }

    if (message.value.trim().length < 10) {
        errors[2].textContent = "Message must be at least 10 characters";
        valid = false;
    }

    if (valid) {
        alert("Message sent successfully!");
        form.reset();
    }
});
// Active Navbar Highlight on Scroll
const sections = document.querySelectorAll("section");
const navBtns = document.querySelectorAll(".nav-btn");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navBtns.forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("href") === "#" + current) {
            btn.classList.add("active");
        }
    });
});
// Mobile Menu Toggle
const toggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");
});
