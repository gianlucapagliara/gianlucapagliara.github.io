/**
 * Animations module - Handles scroll animations and entrance effects
 */

/**
 * Initialize scroll animations for timeline items
 */
function initializeScrollAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const cards = document.querySelectorAll('.achievement-card, .github-card, .education-card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply initial styles and observe timeline items
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Apply initial styles and observe cards
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

/**
 * Add smooth scrolling behavior to the page
 */
function initializeSmoothScrolling() {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialize all animations when DOM is loaded
 */
function initializeAnimations() {
    initializeScrollAnimations();
    initializeSmoothScrolling();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeAnimations,
        initializeScrollAnimations,
        initializeSmoothScrolling
    };
} 