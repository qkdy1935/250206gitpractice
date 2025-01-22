// interale 갹체 & 반복문을 지배하는 자가 JS의 중급단계를 지배한다

// 반복하게 하려고 할 때,
// 자료구조 $ 알고리즘 커리큘럼
// 어떤 경우에 배열
// 문법
// 어떤 자료구조가 현 문제를 해결하는데 가장 효율적인가
// 시간복잡도 => 현 자료구조 및 알고리즘이 해당 문제를 해결하는데 걸리는 시간
// 빅오 // 빅세타 // 빅오메가

// 기본형의 반복문
// for문 = ~ 위하여 , (~ 동안에) 어떤한 시간동안에
// 반드시 JV내 interale(~순회, 배열) 객체 사용가능
//배열
const stud = ["Park", "Kim", "Lee"];
// 출력창에 박김이를 한번씩 출력하고 싶므
//초기값 변수는 대체로 i(index값)
//langth = 갯수 배열의 갯수가 늘어나면 반복할려고
for (let i = 0; i < stud.langth; i++) {
  console.log(stud[i]);
}

// for (초기값; 조건식; 증감문) {
//   반복문실행; //조건식이 참이면  최초의 초기값을 조건식이 참인지 확인하고 반복문 실행하고 초기값을 증감시켜서 그 값이 참이면 반복문 실행

// 1부터 시작; 100까지; 5의 배수로 증가
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0 && i % 7 !== 0) {
//     document.write("<p class='red'>" + i + "</p>");
//   }
// }

// 반복문
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 7 !== 0) {
    document.write("<p class='red'>" + i + "</p>");
  } else if (i % 5 !== 0 && i % 7 === 0) {
    document.write("<p class='greem'" + i + "</p>");
  } else if (i % 5 === 0 && i % 7 === 0) {
    document.write("<p class='aqua'" + i + "</p>");
  }
}

const reds = document.querySelectorAll(".red");
console.log(red);
reds.forEach((red) => {
  red.style.color = "red";
});
