// Function to show the contact form
function showContactForm() {
    document.getElementById('contact-form').style.display = 'flex';
}

// Function to hide the contact form
function hideContactForm() {
    document.getElementById('contact-form').style.display = 'none';
}

// Form submission handler (you can add functionality to send form data)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent!');
    hideContactForm();
});
