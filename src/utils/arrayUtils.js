/**
 * Randomly shuffles an array using the Fisher-Yates (Durstenfeld) shuffle algorithm.
 * @param {Array} array - The array to shuffle.
 * @return {Array} - The shuffled array.
 */
export const shuffleArray = (array) => {
    const result = array.slice();  // Clone the array to avoid mutating the original
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];  // Swap elements
    }
    return result;
};