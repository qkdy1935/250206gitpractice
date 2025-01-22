// 선언 함수 (돔)querySelector(메소드)
const board = document.querySelector(".board");

// console.log(board);
const h1 = document.createElement("h1");
h1.innerText = "컴퓨터와 가위.바위.보 맞추기 게임!";

// 컴퓨터가 고르느 숫자에 따른 이미지 넣기
const itemimg = document.createElement("img");
const resultimg = document.createElement("img");

board.appendChild(h1);

const userChoice = prompt("가위,바위,보 중 하나를 선택하세요!", "가위");

// 이미지에 숫자를 넣을수 있는 gameNumr만들기
let gameNum;

switch (userChoice) {
  case "가위":
    gameNum = "1";
    break;
  case "바위":
    gameNum = "2";
    break;
  case "보":
    gameNum = "3";
    break;
  default:
    alert("잘못선택하셨습니다");
    location.reload();
}

// console.log(gameNum);

// JS안에 내장객체 -> 수학객체 = Math (실수값 0보다 크고 1보다 작음 = 소수점 나옴)
// Math안에 반올림 함수가 있음(소수점 없앰) => ceil
//  random 난수 = 정해지지않은값
// Math.random() 곱하기 3
// Math.ceil(Math.random() * 3);  = 1,2,3 중에 랜덤으로 나옴
let comChoice = Math.ceil(Math.random() * 3);
// console.log(com);
itemimg.src = `./imgs/img_${comChoice}.png`;

// 조건문
if (gameNum === comChoice) {
  resultimg.src = `./imgs/01.png`;
}

if (gameNum !== comChoice) {
  resultimg.src = `./imgs/02.png`;
}

/*
board.appendChild(h1);
board.appendChild(itemimg);
board.appendChild(resultimg);
*/
// 축약형
board.append(h1, itemimg, resultimg);
