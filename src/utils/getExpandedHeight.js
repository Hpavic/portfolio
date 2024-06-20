/**
 * Returns the expanded height of the element based on the current screen width.
 * This function considers different media queries to determine the appropriate
 * expanded height of the element (defined in CSS ProjectCard.css).
 *
 * @param {HTMLElement} el - The element to check.
 * @return {number} - The expanded height of the element.
 */

export const getExpandedHeight = (el) => {
    const width = window.innerWidth;
  
    if (width <= 400) {
      return 520;
    } else if (width <= 600) {
      return 340;
    } else {
      return el.offsetHeight * 2;
    }
  };