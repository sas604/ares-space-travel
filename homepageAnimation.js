// intersection observer options

let options = {
    root: null,
    Margin: "10px",
    threshold: 0,
};
// elements to observ
let target = document.querySelector(".mars");
let targetMoon = document.querySelector(".moon");
// function that fires on resize and load event, controls behaivior on different screen sizes
let fadeEfect = () => {
    let width = window.innerWidth;
    efect("moon", "1rem", 1);
    efect("mars", "1rem", 1);
    if (width > 992) {
        efect("moon", 0, 0);
        efect("mars", 0, 0);
        // add elements to observe
        observer.observe(target);
        observerMoon.observe(targetMoon);
    } else {
        //remove observed elements
        observer.unobserve(target);
        observerMoon.unobserve(targetMoon);
    }
};
// intersection observer callbacks
let intersection = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            efect("mars", "0 0 0 -17%", 1);
        }
    });
};

let intersectionMoon = (entries, observerMoon) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            efect("moon", "0 0 0 17%", 1);
        }
    });
};

// inrtersection constructor
let observer = new IntersectionObserver(intersection, options);
let observerMoon = new IntersectionObserver(intersectionMoon, options);

/// function for div animation
let efect = (targeElement, margin, opacity) => {
    let target = document.querySelector(`.${targeElement}`);
    target.childNodes[3].style.opacity = opacity;
    target.childNodes[5].style.opacity = opacity;
    target.childNodes[5].style.margin = margin;
};
// add evennts
window.addEventListener("resize", fadeEfect);
window.addEventListener("load", fadeEfect);
