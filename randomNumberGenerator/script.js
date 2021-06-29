const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () => {
    // Generate number between 1 and 10
    number.innerHTML = Math.floor(Math.random() * 10 + 1);
}

btn.addEventListener("click", generateNumber);
generateNumber();

