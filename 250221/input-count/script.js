const input = document.querySelector(".number-input");

const min = Number(input.getAttribute("data-min"));
const max = Number(input.getAttribute("data-max"));
const step = Number(input.getAttribute("data-step"));
let value = Number(input.getAttribute("data-value"));

const number = document.querySelector(".number");
number.innerText = value; // 데이터의 벨류값을 텍스트로 넣기

const bnts = document.querySelectorAll(".btn");
bnts.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerText === "add") {
      if (max) {
        if (value < max && value + step <= max) {
          value += step;
        }
      } else {
        value += step;
      }
      input.style.transform = "rotateY(20deg)";
      setTimeout(() => {
        input.style.transform = "rotateY(0)";
      }, 150);
      number.innerText = value;
    }
  });

  btn.addEventListener("click", (e) => {
    if (e.target.innerText === "remove") {
      if (min) {
        if (value > min && value - step >= min) {
          value -= step;
        }
      } else {
        value -= step;
      }
      input.style.transform = "rotateY(-20deg)";
      setTimeout(() => {
        input.style.transform = "rotateY(0)";
      }, 150);
      number.innerText = value;
    }
  });
});
