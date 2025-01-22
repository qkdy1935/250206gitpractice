const buttons = document.querySelectorAll("button");
const computerchoice = document.querySelector(".computer-choice");
const userchoice = document.querySelector(".you-choice");
// const result = ["가위 ✌", "바위 ✊", "보 🤚"];
const result = document.querySelector(".reasult");
const winner = ["가위", "바위", "보"];
let message;

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     console.log(event.target.innerText);
//   });
// });
const show = (user, computer, message) => {
  computerchoice.innerText = computer;
  userchoice.innerText = user;
  winner.innerText = message;
};

const game = (user, computer) => {
  if (user === computer) {
    // console.log("무승부");
    message = "무승부";
  } else {
    switch (user + computer) {
      case "가위보":
      case "바위가위":
      case "보바위":
        // console.log("사용자 승리!"); // 같은 결과 값일 경우 마지막만 브레이크 넣어주면 됨
        message = "사용자 승리!";
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        // console.log("컴퓨터 승리!");
        message = "컴퓨터 승리!";
        break;
    }
  }

  // console.log(user, computer, message);
  show(user, computer, message);
};

const play = (event) => {
  const user = event.target.innerText;
  // console.log(event.target.innerText);
  const randomIndex = Math.floor(Math.random() * 3); //floor 소수점 내림 (1.2 -> 1)
  const computer = result[randomIndex];
  // console.log(user, computer);
  game(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});
