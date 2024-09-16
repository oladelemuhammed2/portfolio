// Smooth scrolling for navigation links
document.querySelectorAll('a[hre^="#"]').forEach(anchor =>
{
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behaviour: 'smooth'
        });
    });
});

// Toggle menu visibility on mobile devices
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('show');
});

// Show "back-to-top" button when user scrolls down
const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
    } else {
    backToTopButton.style.display = 'none';
    }
    });
   
// Initialize AOS
AOS.init();