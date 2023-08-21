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

/*view animations in section view*/
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        console.log(entry);
        if (entry.isIntersecting) {

            entry.target.classList.add("animate");

        };

    });

})

const inanimateElements = document.querySelectorAll(".inanimate");

inanimateElements.forEach((element) => observer.observe(element));