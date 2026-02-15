/* =============================================================================
   HARSH CHANDAK - DATA ANALYST PORTFOLIO
   JavaScript Functionality
   ============================================================================= */

// =============================================================================
// AUTO-UPDATING EXPERIENCE DURATION
// Edit the START_DATE below to change when the experience duration calculation begins
// Format: YYYY-MM-DD (e.g., '2024-08-15' for August 15, 2024)
// =============================================================================

const EXPERIENCE_START_DATE = '2026-02-14'; // EDIT THIS DATE TO CHANGE YOUR START DATE

function calculateExperienceDuration() {
    const startDate = new Date(EXPERIENCE_START_DATE);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    // Adjust if current month is before start month
    if (months < 0) {
        years--;
        months += 12;
    }

    let durationText = '';

    if (years > 0) {
        durationText += `${years} year${years !== 1 ? 's' : ''}`;
    }

    if (months > 0) {
        if (years > 0) durationText += ' ';
        durationText += `${months} month${months !== 1 ? 's' : ''}`;
    }

    if (years === 0 && months === 0) {
        durationText = 'Just started';
    }

    return durationText;
}

// Update the experience duration on page load
window.addEventListener('DOMContentLoaded', function () {
    const durationElement = document.getElementById('experienceDuration');
    if (durationElement) {
        durationElement.textContent = calculateExperienceDuration();
    }
});


// =============================================================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// =============================================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return; // Skip if it's just "#"
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// =============================================================================
// NAVBAR BACKGROUND ON SCROLL
// =============================================================================

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(255, 215, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// =============================================================================
// MOBILE MENU TOGGLE
// =============================================================================

const burger = document.querySelector('.nav-burger');
const navMenu = document.querySelector('.nav-menu');

if (burger && navMenu) {
    // Toggle menu on burger click
    burger.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        burger.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            burger.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnBurger = burger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnBurger && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            burger.classList.remove('active');
        }
    });
}

// =============================================================================
// CONTACT FORM HANDLER (UI ONLY - NO BACKEND)
// =============================================================================

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Show success message (since there's no backend)
        alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
        
        // Reset form
        contactForm.reset();
    });
}

// =============================================================================
// DOWNLOAD RESUME BUTTON HANDLER
// =============================================================================

const downloadResumeBtn = document.getElementById('downloadResume');
if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('Harsh Chandak CV.pdf', '_blank');
        // To enable: Replace the alert with:
        // window.open('/path/to/your/resume.pdf', '_blank');
    });
}


//TO VIEW CERTIFICATES
//ADCA
const viewadcacertBtn = document.getElementById('viewadcacert');
if (viewadcacertBtn) {
    viewadcacertBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('certificates/ADCA.pdf', '_blank');
        // To enable: Replace the alert with:
        // window.open('/path/to/your/resume.pdf', '_blank');
    });
}

//ethical hacking
const viewehcertBtn = document.getElementById('viewehcert');
if (viewehcertBtn) {
    viewehcertBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('certificates/ethical hacking.pdf', '_blank')
    });
}

//Devops
const viewdevcertBtn = document.getElementById('viewdevcert');
if (viewdevcertBtn) {
    viewdevcertBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('certificates/devops.pdf', '_blank');
        // To enable: Replace the alert with:
        // window.open('/path/to/your/resume.pdf', '_blank');
    });
}
//DATA SCIENCE
// const viewdscertBtn = document.getElementById('viewdscert');
// if (viewdscertBtn) {
//     viewdscertBtn.addEventListener('click', function(e) {
//         e.preventDefault();
//         window.open('certificates/ds.pdf', '_blank');
//         // To enable: Replace the alert with:
//         // window.open('/path/to/your/resume.pdf', '_blank');
//     });
// }

const viewdscertBtn = document.getElementById('viewdscert');

if (viewdscertBtn) {
    viewdscertBtn.addEventListener('click', function(e) {
        e.preventDefault();

        const certPath = 'certificates/ds.pdf';

        fetch(certPath, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    window.open(certPath, '_blank');
                } else {
                    alert('Certificate not yet generated.');
                }
            })
            .catch(() => {
                alert('Certificate not yet generated.');
            });
    });
}


// =============================================================================
// INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
// =============================================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll(
        '.skill-card, .project-card, .education-card, .cert-card, .stat-item, .experience-item'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// =============================================================================
// CONSOLE MESSAGE
// =============================================================================

console.log('%cHarsh Chandak - Data Analyst Portfolio', 'color: #FFD700; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and vanilla JavaScript', 'color: #B0B0B0; font-size: 14px;');

console.log('%cLooking to hire? Let\'s talk!', 'color: #00D9FF; font-size: 16px;');
