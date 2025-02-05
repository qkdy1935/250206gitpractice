// 문제 100이하의 자연수 A, B, C를 입력받아 새 수 중 가장 작은 값을 console창에 출력하는 프로그램을 작성하세요
// 예) 6, 5, 11의 세 숫자를 입력받았다면 5의 값이 콘솔창에 출력되어야 함

let A, B;
let intNum = Number(prompt("100 이하의 첫 번째 숫자를 입력하세요"));

if (intNum > 100) {
  window.location.reload();
}

if (intNum <= 100) {
  A = intNum;
  let intB = Number(prompt("100 이하의 두 번째 숫자를 입력하세요"));
  if (intB <= 100) {
    B = intNum;
  } else {
    window.location.reload();
  }
}

// if (intNum <= 100) {
//   A = intNum;
// } else {
//   window.location.reload();
// }

// let B = parseInt(prompt("100 이하의 두 번째 숫자를 입력하세요"));
// if (B > 100) {
//   alert("100이하의 숫자만 입력해주세요.");
// }

// let C = parseInt(prompt("100 이하의 세 번째 숫자를 입력하세요"));
// if (C > 100) {
//   alert("100이하의 숫자만 입력해주세요.");
// }

// 5
