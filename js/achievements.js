/**
 * Achievements module - Handles achievement card interactions
 */

/**
 * Toggle description visibility for achievement cards
 * @param {HTMLElement} element - The achievement card element
 */
function toggleAchievementDescription(element) {
    const description = element.querySelector('.achievement-description');
    const hint = element.querySelector('.expand-hint');

    if (description.classList.contains('active')) {
        description.classList.remove('active');
        hint.textContent = 'Click to expand details';
    } else {
        // Close all other descriptions
        document.querySelectorAll('.achievement-description.active').forEach(desc => {
            desc.classList.remove('active');
        });
        document.querySelectorAll('.achievement-card .expand-hint').forEach(h => {
            h.textContent = 'Click to expand details';
        });

        // Open this one
        description.classList.add('active');
        hint.textContent = 'Click to collapse details';
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { toggleAchievementDescription };
} 