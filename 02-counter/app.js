// set inital value to 0
let count = 0;

const vaule = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            vaule.style.color = "green";
        }
        if (count < 0) {
            vaule.style.color = "red";
        }
        // see what will happen if == instead of ===
        if (count === 0) {
            vaule.style.color = "#222";
        }
        vaule.textContent = count;
    });
});