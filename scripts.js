/*footer display*/
const footerElement = document.querySelector("#footer")

window.addEventListener("mousemove", (e) => {

    const mouseYPosition = e.clientY;
    const viewPortHeight = window.innerHeight;
    const thresholdHeight = 75;
    const distanceFromBottom = viewPortHeight - mouseYPosition

    if (distanceFromBottom <= thresholdHeight) {

        footerElement.style.bottom = '0';

    } else {

        footerElement.style.bottom = '-100px';
    }

});
