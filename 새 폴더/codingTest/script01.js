// 문제 100이하의 자연수 A, B, C를 입력받아 새 수 중 가장 작은 값을 console창에 출력하는 프로그램을 작성하세요
// 예) 6, 5, 11의 세 숫자를 입력받았다면 5의 값이 콘솔창에 출력되어야 함

let A = parseInt(prompt("100 이하의 첫 번째 숫자를 입력하세요"));
if (A > 100) {
  alert("100 이하의 숫자만 입력해주세요.");
  window.location.reload();
} else {
  let B = parseInt(prompt("100 이하의 두 번째 숫자를 입력하세요"));
}
if (B > 100) {
  alert("100 이하의 숫자만 입력해주세요.");
  window.location.reload();
} else {
  let C = parseInt(prompt("100 이하의 두 번째 숫자를 입력하세요"));
}
if (C > 100) {
  alert("100 이하의 숫자만 입력해주세요.");
  window.location.reload();
} else {
}

// let B = parseInt(prompt("100 이하의 두 번째 숫자를 입력하세요"));

// let C = parseInt(prompt("100 이하의 세 번째 숫자를 입력하세요"));
// let B = parseInt(prompt("100 이하의 두 번째 숫자를 입력하세요"));
// if (B > 100) {
//   alert("100 이하의 숫자만 입력해주세요.");
// } else {
//   let C = parseInt(prompt("100 이하의 세 번째 숫자를 입력하세요"));
//   if (C > 100) {
//     alert("100 이하의 숫자만 입력해주세요.");
//   } else {
//   }
// }

let num = [A, B, C];

let small = num[0];
165;
for (let i = 1; i < num.length; i++) {
  if (num[i] < small) {
    small = num[i];
  }
}

console.log(`${num} 중 가장 작은 값은 ${small} 입니다.`);
