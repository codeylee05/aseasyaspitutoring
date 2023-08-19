/*footer display*/
const footerElement = document.querySelector("#footer")

window.addEventListener("mousemove", (e) => {

    const mouseYPosition = e.clientY;
    const viewPortHeight = window.innerHeight;
    const thresholdHeight = 93;
    const distanceFromBottom = viewPortHeight - mouseYPosition

    if (distanceFromBottom <= thresholdHeight) {

        footerElement.style.bottom = '0';

    } else {

        footerElement.style.bottom = '-100px';
    }

});

/*in-section-view animation*/
// Get all feature elements
const featureElements = document.querySelectorAll('.feature');

// Define the Intersection Observer callback function
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation class to the element in view
            entry.target.classList.add('animate');
            // Unobserve the element to avoid redundant callbacks
            observer.unobserve(entry.target);
        }
    });
};

// Create an Intersection Observer
const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.3 // Adjust this threshold as needed
});

// Observe each feature element
featureElements.forEach(feature => {
    observer.observe(feature);
});
