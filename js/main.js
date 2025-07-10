/**
 * Main JavaScript file - Coordinates all modules and handles initialization
 */

/**
 * Initialize the application when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function () {
    // Initialize animations
    if (typeof initializeAnimations === 'function') {
        initializeAnimations();
    }

    console.log('Profile website initialized successfully');
});

/**
 * Global error handler for better debugging
 */
window.addEventListener('error', function (e) {
    console.error('JavaScript error:', e.error);
});

/**
 * Handle window resize events for responsive adjustments
 */
window.addEventListener('resize', function () {
    // Debounce resize events
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(function () {
        // Add any resize-specific logic here if needed
        console.log('Window resized');
    }, 250);
});

/**
 * Performance optimization: Preload critical resources
 */
function preloadCriticalResources() {
    // Preload any critical external resources if needed
    // This is a placeholder for future enhancements
}

// Initialize preloading
preloadCriticalResources(); 