/**
 * G360 - Guru 360 | Main JavaScript
 * Version: 1.0
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    Navigation.init();
    SmoothScroll.init();
    ProductFilter.init();
    FormHandler.init();
    Animations.init();
});

/**
 * Navigation Module
 */
const Navigation = {
    init() {
        this.navbar = document.querySelector('.navbar');
        this.navToggle = document.querySelector('.nav-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');

        if (this.navbar) {
            this.handleScroll();
            window.addEventListener('scroll', () => this.handleScroll());
        }

        if (this.navToggle && this.navMenu) {
            this.setupMobileMenu();
        }

        this.setActiveLink();
    },

    handleScroll() {
        if (window.scrollY > 100) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    },

    setupMobileMenu() {
        this.navToggle.addEventListener('click', () => {
            this.navToggle.classList.toggle('active');
            this.navMenu.classList.toggle('active');
            document.body.style.overflow = this.navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.navToggle.classList.remove('active');
                this.navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navMenu.contains(e.target) && !this.navToggle.contains(e.target)) {
                this.navToggle.classList.remove('active');
                this.navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    },

    setActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
};

/**
 * Smooth Scroll Module
 */
const SmoothScroll = {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const targetId = anchor.getAttribute('href');

                if (targetId === '#') return;

                const target = document.querySelector(targetId);

                if (target) {
                    e.preventDefault();
                    const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
};

/**
 * Product Filter Module
 */
const ProductFilter = {
    init() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.productCards = document.querySelectorAll('.product-card');

        if (this.filterButtons.length && this.productCards.length) {
            this.setupFilters();
        }
    },

    setupFilters() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                this.filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Filter products
                const category = button.dataset.filter;
                this.filterProducts(category);
            });
        });
    },

    filterProducts(category) {
        this.productCards.forEach(card => {
            const cardCategory = card.dataset.category;

            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    }
};

/**
 * Form Handler Module
 */
const FormHandler = {
    init() {
        this.forms = document.querySelectorAll('form');

        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => this.handleSubmit(e, form));
        });
    },

    handleSubmit(e, form) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Basic validation
        if (!this.validateForm(form)) {
            return;
        }

        // Show success message (in production, send to server)
        this.showMessage(form, 'Thank you! We will get back to you soon.', 'success');

        // Reset form
        form.reset();
    },

    validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required]');

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'var(--accent-red)';
            } else {
                input.style.borderColor = '';
            }

            // Email validation
            if (input.type === 'email' && input.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    isValid = false;
                    input.style.borderColor = 'var(--accent-red)';
                }
            }
        });

        return isValid;
    },

    showMessage(form, message, type) {
        // Remove existing message
        const existingMsg = form.querySelector('.form-message');
        if (existingMsg) existingMsg.remove();

        // Create message element
        const msgEl = document.createElement('div');
        msgEl.className = `form-message ${type}`;
        msgEl.textContent = message;
        msgEl.style.cssText = `
            padding: 15px;
            border-radius: 8px;
            margin-top: 15px;
            text-align: center;
            background: ${type === 'success' ? 'rgba(0, 204, 102, 0.2)' : 'rgba(255, 51, 102, 0.2)'};
            color: ${type === 'success' ? 'var(--accent-green)' : 'var(--accent-red)'};
            border: 1px solid ${type === 'success' ? 'var(--accent-green)' : 'var(--accent-red)'};
        `;

        form.appendChild(msgEl);

        // Remove message after 5 seconds
        setTimeout(() => msgEl.remove(), 5000);
    }
};

/**
 * Animations Module
 */
const Animations = {
    init() {
        this.observeElements();
    },

    observeElements() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-slideUp');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements
        document.querySelectorAll('.card, .stat-box, .credential, .coming-card').forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }
};

/**
 * Enquire Button Handler
 */
document.querySelectorAll('.enquire-btn, .btn-enquire').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        // Get product name if available
        const card = btn.closest('.product-card');
        const productName = card?.querySelector('.card-title, .product-name')?.textContent;

        // Navigate to contact page with product info
        if (productName) {
            window.location.href = `contact.html?product=${encodeURIComponent(productName)}`;
        } else {
            window.location.href = 'contact.html';
        }
    });
});

/**
 * Pre-fill contact form from URL params
 */
if (window.location.pathname.includes('contact')) {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');

    if (product) {
        const subjectField = document.querySelector('input[name="subject"]');
        if (subjectField) {
            subjectField.value = `Enquiry about ${product}`;
        }
    }
}
