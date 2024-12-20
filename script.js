// Navigation Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Sticky Navigation
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(116, 170, 239, 0.9)';
    } else {
        navbar.style.background = 'var(--primary-color)';
    }
});

// Form Validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (validateForm(name, email, message)) {
        alert('Message sent successfully!');
        contactForm.reset();
    }
});

function validateForm(name, email, message) {
    if (name.length < 2) {
        alert('Please enter a valid name');
        return false;
    }
    
    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
        alert('Please enter a valid email');
        return false;
    }
    
    if (message.length < 10) {
        alert('Message must be at least 10 characters long');
        return false;
    }
    
    return true;
}