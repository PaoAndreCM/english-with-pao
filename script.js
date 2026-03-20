// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.boxShadow = '0 2px 16px rgba(10, 77, 104, 0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe module cards and pricing cards
document.querySelectorAll('.module-card, .pricing-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Add stagger delay to grid items
document.querySelectorAll('.modules-grid .module-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.pricing-grid .pricing-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.steps-grid .step').forEach((step, index) => {
    step.style.transitionDelay = `${index * 0.1}s`;
});

// Update Calendly link (placeholder - user will add their actual link)
// document.querySelector('.contact-option.primary').href = 'YOUR_CALENDLY_LINK_HERE';

// Update WhatsApp link (placeholder - user will add their number)
// Format: https://wa.me/49XXXXXXXXXX (country code + number, no spaces)
// document.querySelector('.contact-option[href*="wa.me"]').href = 'https://wa.me/YOUR_NUMBER_HERE';

// Analytics placeholder - ready for Google Analytics
// Add your Google Analytics tracking code here
// Example:
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'GA_MEASUREMENT_ID');

console.log('English for Techies website loaded!');
