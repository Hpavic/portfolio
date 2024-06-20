/**
 * Checks if an element will expand out of the viewport when its height is doubled.
 * This function calculates the position of the element relative to the viewport
 * and determines if the element's bottom will be out of view after it expands.
 *
 * @param {HTMLElement} el - The element to check.
 * @return {boolean} - True if the element will expand out of view, otherwise false.
 */

export const willElementExpandOutOfView = (el) => {
    const rect = el.getBoundingClientRect();
    const expandedHeight = el.offsetHeight * 2;
    return rect.top + expandedHeight > window.innerHeight;
  };
  