// --- FEATURE 1: Dynamic Greeting based on time ---
const hour = new Date().getHours();
const greetingElement = document.querySelector('#home h1');
let greetingText;

if (hour < 12) {
    greetingText = "Good Morning,";
} else if (hour < 18) {
    greetingText = "Good Afternoon,";
} else {
    greetingText = "Good Evening,";
}

if (greetingElement) {
    const currentText = greetingElement.innerText;
    if (currentText.includes("Hi,")) {
         greetingElement.innerText = currentText.replace("Hi,", greetingText);
    } else if (currentText.includes("Hi")) {
         greetingElement.innerText = currentText.replace("Hi", greetingText);
    }
}

// --- FEATURE 2: Handle Contact Form Submission ---
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        alert("Thank you! Message sent from: " + email);
        form.reset();
    });
}

// --- FEATURE 3: Interactive Project Cards (Click Highlight) ---
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', function() {
        if (this.style.backgroundColor === 'lightblue') {
             this.style.backgroundColor = 'white';
        } else {
             this.style.backgroundColor = 'lightblue';
        }
    });
});

// --- FEATURE 4: Auto-Update Copyright Year in Footer ---
// This finds the footer and ensures the year is always current
const footerText = document.querySelector('footer p');
if (footerText) {
    const currentYear = new Date().getFullYear();
    // Replaces "2025" or any year with the actual system year
    footerText.innerHTML = footerText.innerHTML.replace(/20\d\d/, currentYear);
}

// --- FEATURE 5: Dynamic Browser Tab Title ---
// When the user switches tabs, the title changes to "Come back!"
let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come back to Portfolio! 😲";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
});

// --- FEATURE 6: Developer Console Signature ---
// Prints a secret message in the browser console (F12)
console.log("%cHello! I coded this portfolio myself.", "color: blue; font-size: 20px; font-weight: bold;");

// --- FEATURE 7: "Back to Top" Button Logic ---
// We will create the button strictly with JS so you don't have to edit HTML
const toTopBtn = document.createElement("button");
toTopBtn.innerText = "⬆";
toTopBtn.id = "toTopBtn";
// Style the button in JS
Object.assign(toTopBtn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    display: "none",
    padding: "10px 15px",
    fontSize: "20px",
    cursor: "pointer",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    zIndex: "1000"
});
document.body.appendChild(toTopBtn);

// Show button when scrolling down
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
});

// Scroll to top when clicked
toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});