/**
 * Utility functions for managing navbar active states
 */

/**
 * Updates the active state of navbar links and positions the active box indicator
 * @param {string} targetHref - The href value of the link to make active (e.g., "#projects")
 * @param {number} delay - Optional delay in milliseconds before updating active box position (default: 100)
 */
export const updateNavbarActiveState = (targetHref, delay = 100) => {
    // Find the target navigation link
    const targetNavLink = document.querySelector(`a[href="${targetHref}"]`);

    if (!targetNavLink) {
        console.warn(`Navigation link with href "${targetHref}" not found`);
        return;
    }

    // Remove active class from all navigation links
    const allNavLinks = document.querySelectorAll(".nav-link");
    allNavLinks.forEach((link) => {
        link.classList.remove("active");
    });

    // Add active class to the target link
    targetNavLink.classList.add("active");

    // Update the active box position
    const activeBox = document.querySelector(".active-box");
    if (activeBox) {
        setTimeout(() => {
            activeBox.style.top = targetNavLink.offsetTop + "px";
            activeBox.style.left = targetNavLink.offsetLeft + "px";
            activeBox.style.width = targetNavLink.offsetWidth + "px";
            activeBox.style.height = targetNavLink.offsetHeight + "px";
        }, delay);
    }
};

/**
 * Scrolls to a section and updates the navbar active state
 * @param {string} sectionId - The ID of the section to scroll to (without #)
 * @param {Object} scrollOptions - Optional scroll behavior options
 */
export const scrollToSectionAndUpdateNav = (
    sectionId,
    scrollOptions = { behavior: "smooth", block: "start" }
) => {
    // Scroll to the target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView(scrollOptions);
    } else {
        console.warn(`Section with ID "${sectionId}" not found`);
        return;
    }

    // Update navbar active state
    const targetHref = `#${sectionId}`;
    updateNavbarActiveState(targetHref);
};

/**
 * Gets the currently active navigation link
 * @returns {Element|null} The currently active nav link element
 */
export const getCurrentActiveNavLink = () => {
    return document.querySelector(".nav-link.active");
};

/**
 * Checks if a specific navigation link is currently active
 * @param {string} href - The href to check (e.g., "#projects")
 * @returns {boolean} True if the link is active, false otherwise
 */
export const isNavLinkActive = (href) => {
    const link = document.querySelector(`a[href="${href}"]`);
    return link ? link.classList.contains("active") : false;
};
