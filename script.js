const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

        /**
         * Add event listener to anchor tags with href attribute that starts with "#"
         * and does not have class "social-link".
         * When clicked, prevent default behavior and scroll to the element with
         * the same id as the href attribute, with smooth behavior.
         */
document.querySelectorAll('a[href^="#"]:not(.social-link)').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.portfolio-item').forEach(item => {
    observer.observe(item);
});

window.addEventListener('scroll', () => {
    const achievements = document.querySelectorAll('.achievement-card');
    achievements.forEach(achievement => {
        const position = achievement.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(position < screenPosition) {
            achievement.classList.add('fade-in');
        }
    });
});
