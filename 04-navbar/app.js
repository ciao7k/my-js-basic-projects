const navToggle = document.querySelector(".nav-toggle");
/* get the links */
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
});