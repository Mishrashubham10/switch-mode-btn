const input = document.querySelector(".input");
const body = document.querySelector("body");

input.checked = JSON.parse(localStorage.getItem("mode"));

function updateBody() {
    if (input.checked) {
        body.style.background = "#000";
    } else {
        body.style.background = "#fff";
    };
};

input.addEventListener("input", () => {
    updateBody();
    updateLocatStorage();
});

function updateLocatStorage() {
    localStorage.setItem("mode", JSON.stringify(input.checked));
};