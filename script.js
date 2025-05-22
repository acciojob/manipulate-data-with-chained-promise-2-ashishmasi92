function chainPromise() {
    // Step 1: Immediately resolve the array
    Promise.resolve([1, 2, 3, 4])
        .then(res => {
            return new Promise((resolve) => {
                // ✅ Step 2: Delay 1 second to meet test requirement
                setTimeout(() => {
                    const even = res.filter(num => num % 2 === 0);

                    const div = document.getElementById('output');
                    div.textContent = even.join(',');  // Must be '2,4'
                    resolve(even);
                }, 1000); // ⏱️ Make sure this happens within 4s total
            });
        })
        .then(evens => {
            return new Promise((resolve) => {
                // ✅ Step 3: Multiply after 2s
                setTimeout(() => {
                    const doubled = evens.map(num => num * 2);
                    const div = document.getElementById('output');
                    div.textContent = doubled.join(',');
                    resolve(doubled);
                }, 2000);
            });
        })
        .catch(err => {
            console.error('Error:', err.message);
        });
}

// Ensure it runs when the DOM is ready
window.onload = chainPromise;
