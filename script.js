// --- FEATURE 1: Dynamic Greeting based on time of day ---
const hour = new Date().getHours(); // Get current hour (0-23)
const greetingElement = document.querySelector('#home h1'); // Find the main heading

let greetingText;
if (hour < 12) {
    greetingText = "Good Morning,";
} else if (hour < 18) {
    greetingText = "Good Afternoon,";
} else {
    greetingText = "Good Evening,";
}

// Update the text on the screen (be sure to replace [Your Name] in the HTML first!)
// This keeps the "I'm [Your Name]" part if you formatted it correctly, 
// but for now, let's just prepend the greeting.
if (greetingElement) {
    const currentText = greetingElement.innerText;
    // This replaces "Hi" with the time-specific greeting
    greetingElement.innerText = currentText.replace("Hi,", greetingText).replace("Hi", greetingText);
}


// --- FEATURE 2: Handle Contact Form Submission ---
const form = document.getElementById('contactForm');

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Stops the page from refreshing
        
        // Get the email value
        const email = form.querySelector('input[type="email"]').value;
        
        // Show a popup alert
        alert("Thank you! Message sent from: " + email);
        
        // Clear the form
        form.reset();
    });
}


// --- FEATURE 3: Interactive Project Cards ---
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', function() {
        // Toggle a special class to change color when clicked
        // Note: We need to define this 'highlight' class in CSS or just change style directly here
        if (this.style.backgroundColor === 'lightblue') {
             this.style.backgroundColor = 'white'; // Toggle off
        } else {
             this.style.backgroundColor = 'lightblue'; // Toggle on
        }
    });
});