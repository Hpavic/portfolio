/**
 * Fetch data from a specified URL and handle it with provided callbacks.
 * @param {string} url - The URL to fetch data from.
 * @param {function} onSuccess - Callback function to handle the data on success.
 * @param {function} onError - Callback function to handle errors.
 * @param {function} onLoading - Callback function to manage loading state.
 * @param {number} [delay=0] - Optional delay in milliseconds to simulate loading.
 */
const fetchData = (url, onSuccess, onError, delay = 3000) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok (${response.status})`);
                }
                return response.json();
            })
            .then(data => {
                setTimeout(() => {
                    try {
                        onSuccess(data);
                        resolve(data); // Resolve the promise after the delay and onSuccess
                    } catch (err) {
                        reject(err);
                    }
                }, delay);
            })
            .catch(error => {
                setTimeout(() => {
                    onError(error);
                    reject(error); // Reject the promise after the delay and onError
                }, delay);
            });
    });
};

export default fetchData;
