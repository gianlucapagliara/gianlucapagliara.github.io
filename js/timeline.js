/**
 * Timeline module - Handles timeline item interactions
 */

/**
 * Toggle description visibility for timeline items
 * @param {HTMLElement} element - The timeline item element
 */
function toggleDescription(element) {
    const description = element.querySelector('.timeline-description');
    const hint = element.querySelector('.expand-hint');

    if (description.classList.contains('active')) {
        description.classList.remove('active');
        hint.textContent = 'Click to expand details';
    } else {
        // Close all other descriptions
        document.querySelectorAll('.timeline-description.active').forEach(desc => {
            desc.classList.remove('active');
        });
        document.querySelectorAll('.timeline-item .expand-hint').forEach(h => {
            h.textContent = 'Click to expand details';
        });

        // Open this one
        description.classList.add('active');
        hint.textContent = 'Click to collapse details';
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { toggleDescription };
} 