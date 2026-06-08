/**
 * Accessible Portfolio Website - JavaScript
 * Built with WCAG 2.1 AA Compliance
 */

// ============================================================================
// Initialization
// ============================================================================

document.addEventListener('DOMContentLoaded', function () {
    initializeNavigation();
    initializeForm();
    initializeFilters();
    updateYear();
    setupSkipLinks();
});

// ============================================================================
// Navigation
// ============================================================================

function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', function () {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when Escape is pressed
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
        }
    });
}

// ============================================================================
// Form Validation
// ============================================================================

function initializeForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Character counter for message
    const messageField = form.querySelector('#message');
    if (messageField) {
        messageField.addEventListener('input', function () {
            const charCount = document.getElementById('char-count');
            if (charCount) {
                charCount.textContent = this.value.length;
            }
        });
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        if (validateForm(form)) {
            submitForm(form);
        }
    });

    // Clear error messages on input
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('change', function () {
            clearFieldError(this);
        });
    });
}

function validateForm(form) {
    const formGroup = form.querySelectorAll('.form-group');
    let isValid = true;

    // Clear all previous error messages
    formGroup.forEach(group => {
        group.classList.remove('error');
    });

    // Validate required fields
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
            showFieldError(field);
        }
    });

    // Validate email format
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value && !isValidEmail(emailField.value)) {
        isValid = false;
        showFieldError(emailField, 'Please enter a valid email address');
    }

    // Validate privacy checkbox
    const privacyCheckbox = form.querySelector('input[name="privacy"]');
    if (privacyCheckbox && !privacyCheckbox.checked) {
        isValid = false;
        const errorDiv = privacyCheckbox.parentElement.querySelector('.error-message') || 
                        document.getElementById('privacy-error');
        if (errorDiv) {
            errorDiv.textContent = 'You must agree to the Privacy Policy';
            errorDiv.style.display = 'block';
        }
    }

    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    
    if (field.type === 'email') {
        return isValidEmail(value);
    }
    
    if (field.type === 'tel') {
        return value === '' || isValidPhone(value);
    }

    return value.length > 0;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

function showFieldError(field, customMessage = null) {
    const formGroup = field.closest('.form-group');
    if (!formGroup) return;

    formGroup.classList.add('error');

    const errorDiv = formGroup.querySelector('.error-message');
    if (errorDiv) {
        if (customMessage) {
            errorDiv.textContent = customMessage;
        } else {
            errorDiv.textContent = getErrorMessage(field);
        }
        errorDiv.style.display = 'block';
        errorDiv.focus();
    }
}

function clearFieldError(field) {
    const formGroup = field.closest('.form-group');
    if (!formGroup) return;

    formGroup.classList.remove('error');
    const errorDiv = formGroup.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.textContent = '';
        errorDiv.style.display = 'none';
    }
}

function getErrorMessage(field) {
    const fieldName = field.name;
    const label = document.querySelector(`label[for="${field.id}"]`);
    const displayName = label ? label.textContent.replace(/\s*\*\s*$/, '').trim() : fieldName;

    if (!field.value.trim()) {
        return `${displayName} is required`;
    }

    if (field.type === 'email') {
        return 'Please enter a valid email address';
    }

    if (field.type === 'tel') {
        return 'Please enter a valid phone number';
    }

    return `Invalid ${displayName}`;
}

function submitForm(form) {
    const formMessage = document.getElementById('form-message');
    
    // Simulate form submission
    const formData = new FormData(form);
    
    // In a real application, you would send this to a server
    console.log('Form submitted with data:', Object.fromEntries(formData));

    // Show success message
    if (formMessage) {
        formMessage.textContent = 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.';
        formMessage.classList.add('success');
        formMessage.classList.remove('error');
    }

    // Reset form after 2 seconds
    setTimeout(() => {
        form.reset();
        document.getElementById('char-count').textContent = '0';
        if (formMessage) {
            formMessage.textContent = '';
            formMessage.classList.remove('success');
        }
    }, 3000);
}

// ============================================================================
// Filter Controls
// ============================================================================

function initializeFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length === 0) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');

            // Update button states
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');

            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = '';
                    // Trigger animation
                    card.offsetHeight;
                } else {
                    card.style.display = 'none';
                }
            });

            // Announce filter change to screen readers
            announceToScreenReader(`Showing ${filter === 'all' ? 'all' : filter} projects`);
        });
    });
}

// ============================================================================
// Accessibility Utilities
// ============================================================================

function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        announcement.remove();
    }, 1000);
}

function setupSkipLinks() {
    // Add skip link if it doesn't exist
    const existingSkipLink = document.querySelector('.skip-link');
    if (!existingSkipLink) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        document.body.prepend(skipLink);
    }

    // Add ID to main element if it doesn't exist
    const main = document.querySelector('main');
    if (main && !main.id) {
        main.id = 'main';
    }
}

// ============================================================================
// Utility Functions
// ============================================================================

function updateYear() {
    const yearElements = document.querySelectorAll('#year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
}

// ============================================================================
// Keyboard Navigation Enhancements
// ============================================================================

document.addEventListener('keydown', function (e) {
    // Trap focus in modals when they exist
    if (e.key === 'Tab') {
        // Add modal focus trap logic here if needed
    }
});

// ============================================================================
// Performance: Lazy Loading Images (Optional)
// ============================================================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================================================
// Accessibility Testing Helpers
// ============================================================================

// Function to check page for common accessibility issues (for development only)
window.checkA11y = function () {
    const issues = {
        missingAlt: [],
        emptyLinks: [],
        missingLabels: [],
        lowContrast: []
    };

    // Check for images without alt text
    document.querySelectorAll('img').forEach(img => {
        if (!img.alt || img.alt.trim() === '') {
            issues.missingAlt.push(img);
        }
    });

    // Check for empty links
    document.querySelectorAll('a').forEach(link => {
        if (!link.textContent.trim() && !link.getAttribute('aria-label')) {
            issues.emptyLinks.push(link);
        }
    });

    // Check for form inputs without labels
    document.querySelectorAll('input, select, textarea').forEach(input => {
        if (!document.querySelector(`label[for="${input.id}"]`) && !input.getAttribute('aria-label')) {
            issues.missingLabels.push(input);
        }
    });

    console.log('Accessibility Check Results:', issues);
    return issues;
};
