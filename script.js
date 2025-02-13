// Navigation Toggle and Animations
const nav = document.querySelector('nav');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Last scroll position for scroll direction
let lastScroll = 0;

// Handle navigation visibility on scroll
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for background
    if (currentScroll > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    // Hide/show navigation based on scroll direction
    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-content') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Smooth scroll for navigation links
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
        
        // Smooth scroll to section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Typing animation
const roles = [
    "Android Developer ",
    "Front-end Developer ",
    "Database Expert ",
    "B.Tech IT Student "
];

const typingText = document.querySelector('.typing-text');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingDelay = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingDelay = 500; // Pause before next word
    } else {
        typingDelay = isDeleting ? 50 : 100;
    }

    setTimeout(typeRole, typingDelay);
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            if (entry.target.classList.contains('skill-card')) {
                entry.target.style.transitionDelay = `${entry.target.dataset.delay}s`;
            }
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.animate').forEach(element => {
    observer.observe(element);
});

// Skill cards animation
document.querySelectorAll('.skill-card').forEach((card, index) => {
    card.dataset.delay = index * 0.2;
    observer.observe(card);
});

// Stats counter animation
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const value = parseInt(stat.textContent);
                animateValue(stat, 0, value, 2000);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Initialize animations on page load
window.addEventListener('load', () => {
    typeRole();
    document.body.classList.add('loaded');
});

// Smooth reveal for page sections
document.querySelectorAll('section').forEach((section, index) => {
    section.style.setProperty('--section-delay', `${index * 0.2}s`);
    observer.observe(section);
});

// Button hover effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        button.style.setProperty('--x', `${x}px`);
        button.style.setProperty('--y', `${y}px`);
    });
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Profile Image Rotation
const profileImages = document.querySelectorAll('.profile-image img');
let currentImageIndex = 0;

function rotateProfileImage() {
    profileImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % profileImages.length;
    profileImages[currentImageIndex].classList.add('active');
}

setInterval(rotateProfileImage, 3000);

// Animation Observer
const animateElements = document.querySelectorAll('.animate');

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, {
    threshold: 0.1
});

animateElements.forEach(element => {
    animationObserver.observe(element);
});

// Project Cards Animation
const projectCards = document.querySelectorAll('.project-card');

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Animate tags sequentially
            const tags = entry.target.querySelectorAll('.project-tags span');
            tags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'translateX(0)';
                    tag.style.opacity = '1';
                }, index * 100);
            });
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
});

projectCards.forEach(card => {
    projectObserver.observe(card);
});

// Hover effect for project links
const projectLinks = document.querySelectorAll('.project-link');

projectLinks.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        const icon = link.querySelector('i');
        icon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            icon.style.transform = 'scale(1)';
        }, 200);
    });
});

// Parallax effect for project cards
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.project-card');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;

        const angleX = (mouseY - cardY) / 30;
        const angleY = (mouseX - cardX) / -30;

        if (Math.abs(mouseX - cardX) < 500 && Math.abs(mouseY - cardY) < 500) {
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
        } else {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        }
    });
});

// Reset card transform on mouse leave
document.addEventListener('mouseleave', () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const formProps = Object.fromEntries(formData);
    
    // Add loading state to button
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    try {
        // Simulate sending email (replace with actual email service)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        alert('Message sent successfully!');
        contactForm.reset();
    } catch (error) {
        // Show error message
        alert('Failed to send message. Please try again.');
    } finally {
        // Reset button state
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
});

// Contact Button Ripple Effect
function createRipple(event) {
    const button = event.currentTarget;
    
    // Remove existing ripple
    const ripple = button.querySelector('.ripple');
    if (ripple) {
        ripple.remove();
    }
    
    // Create new ripple
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');
    
    button.appendChild(circle);
}

// Add ripple effect to all primary buttons
const primaryButtons = document.querySelectorAll('.btn-primary');
primaryButtons.forEach(button => {
    button.addEventListener('click', createRipple);
});

// Enhanced contact form button interaction
const contactFormButton = document.querySelector('.contact-form button');
if (contactFormButton) {
    contactFormButton.addEventListener('mouseenter', () => {
        const icon = contactFormButton.querySelector('i');
        icon.style.transform = 'translateX(5px) scale(1.2)';
        setTimeout(() => {
            icon.style.transform = 'translateX(5px) scale(1)';
        }, 200);
    });

    contactFormButton.addEventListener('mouseleave', () => {
        const icon = contactFormButton.querySelector('i');
        icon.style.transform = 'translateX(0) scale(1)';
    });
}
