// script.js

// Function to display a confirmation message when ordering a pizza
function orderPizza() {
    alert("Your pizza has been added to the cart!");
}

// Function to display a thank you message when submitting a contact form
function submitForm() {
    alert("Thank you for reaching out to us! We'll get back to you shortly.");
}

// Function to toggle the navbar collapse on mobile devices
function toggleNavbar() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.classList.toggle('show');
}

// Function to close the navbar collapse when a menu link is clicked on mobile devices
function closeNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler.offsetParent !== null) {
        toggleNavbar();
    }
}

// Add event listeners to navbar toggler and nav links for mobile responsiveness
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('.nav-link');
    
    navbarToggler.addEventListener('click', toggleNavbar);
    
    navLinks.forEach(function (link) {
        link.addEventListener('click', closeNavbar);
    });
});

// Add more JavaScript functions as needed for your website
