/**
 * Formats a given text by dynamically injecting HTML to apply styles based on specified keywords.
 * This function searches for technology names defined in `skillIcons` and replaces them with HTML spans
 * that apply the specified color. It handles names with special characters and spaces by using customized
 * regular expressions for each technology. It also matches derivatives of technology names to handle
 * language variations with suffixes.
 *
 * @param {string} description - The text to be formatted.
 * @return {string} - The text with technology names replaced by styled spans.
 */

import skillIcons from "../constants/skillIcons";

export function formatDescription(description) {
    let formattedDescription = description;
  
    Object.entries(skillIcons).forEach(([key, { name, color }]) => {
      // Escape special regex characters and create a regex that loosely matches the root and its derivations
      const safeName = name.replace(/[#-.]/g, '\\$&'); // Escape special regex characters
      const regex = new RegExp(`${safeName}(\\S*)`, 'gi'); // Match the name followed by any non-whitespace characters
  
      formattedDescription = formattedDescription.replace(regex, (match) => {
        return `<span style="color: ${color};">${match}</span>`;
      });
    });
  
    return formattedDescription;
  }
  