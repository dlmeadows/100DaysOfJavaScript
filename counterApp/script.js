// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    const eventTarget = e.target.classList;
    if (eventTarget.contains("add") || eventTarget.contains("fa-arrow-up")) {
        count.innerHTML++;
    }

    if (eventTarget.contains("subtract") || eventTarget.contains("fa-arrow-down")) {
        count.innerHTML--;
    }

    if (eventTarget.contains("reset") || eventTarget.contains("fa-spinner")) {
        count.innerHTML = 0;
    }
    setColor();
});

function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "yellow";
    } else if (count.innerHTML < 0) {
        count.style.color = "orangered";
    } else {
        count.style.color = "#fff";
    }
}
