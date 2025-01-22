// // const userInput = prompt("이름을 입력하세요.");
// // // console.log(typeof userInput);
// // // 사용자 아무런 값을 입력하지 않은 채 확인을 누르면 빈칸(string = 문자열) 이뜨고 , 취소를 누르면 null값이 뜸
// // // 조건문을 실행하기에 앞에서 조건식 자체사 성립될수 없는 값이 들어온다면, 더 이상의 조건문을 실행시키지 않는 조치 !! => 메모리 효율

// // // => 예외조항처리
// // if (userInput === "" || userInput === null) {
// //   console.log("값이 없습니다.");
// // } else {
// //   alert(`${userInput}님 좋은 아침이에요`);
// // }

// // 중첩 lf조건문
// // const score = prompt("내 인생 점수");

// // if (score !== "" || score !== null) {
// //   if (Number(score) >= 90) {
// //     alert("나름 잘 살았다");
// //   } else if (Number(score) >= 80) {
// //     alert("이 정도면 괜찮아");
// //   } else {
// //     alert("지금부터 열심히 해보자");
// //   }
// // }

// // 짝수 & 홀수 구분하는 if 조건문
// // parseInt = 정수
// //  % 2 === 0

// // let userNumber = prompt("숫자를 입력하세요");

// // if (userNumber !== "" || userNumber !== null) {
// //   userNumber = parseInt(userNumber);
// //   if (userNumber % 2 === 0) {
// //     alert(`${userNumber}는 짝수입니다`);
// //   } else {
// //     alert(`${userNumber}는 홀수입니다`);
// //   }
// // }

// // 삼항 조건 연산문
// let userNumber = prompt("숫자를 입력하세요");

// if (userNumber !== "" || userNumber !== null) {
//   userNumber = parseInt(userNumber);
//   // if (userNumber % 2 === 0) {
//   //   alert(`${userNumber}는 짝수입니다`);
//   // } else {
//   //   alert(`${userNumber}는 홀수입니다`);
//   // }
//   userNumber % 2 === 0
//     ? alert(`${userNumber}는 짝수입니다`)
//     : alert(`${userNumber}는 홀수입니다`);
// }

const webPage = prompt(
  "네이버, 구글, 다음 중 즐겨사용하는 사이트는 어디인가요?"
);
let url;

switch (webPage) {
  case "네이버":
    url = "http://www.naver.com";
    break;
  case "구글":
    url = "http://www.google.com";
    break;
  case "다음":
    url = "http://www.daum.nat";
    break;
  default:
    alert("보기 중에 존재하지 않는 사이트입니다");
}

if (url) {
  window.location.href = url;
}
