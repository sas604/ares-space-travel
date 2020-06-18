let menu = document.getElementById("main-nav");
let curentUrl = window.location.pathname;
let subMenu = document.querySelector(".child");
let caret = document.getElementById("caret");
let subBtn = document.getElementById("subBtn");

let header = document.querySelector("header");
console.log(curentUrl);
let curentClass = curentUrl.substring(
    curentUrl.lastIndexOf("/") + 1,
    curentUrl.lastIndexOf(".")
);
console.log(header);
header.classList.add(curentClass);

// menu animation
subBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (caret.classList.contains("fa-caret-down")) {
        caret.classList.remove("fa-caret-down");
        caret.classList.add("fa-caret-up");
        subMenu.classList.add("open");
    } else {
        caret.classList.remove("fa-caret-up");
        caret.classList.add("fa-caret-down");
        subMenu.classList.remove("open");
    }
});
document.querySelector(".menu").addEventListener("click", function () {
    menu.classList.add("open");
});
document.querySelector(".fa-times").addEventListener("click", function () {
    menu.classList.remove("open");
});
