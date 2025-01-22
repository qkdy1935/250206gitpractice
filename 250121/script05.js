// // break; => 종결 조건문에서 무언가가 스탑 종결하고자 할 떄 사용
// for (let i = 1; i <= 10; i++) {
//   if (i === 6) break;
//   document.write(i, "<br/>");
// }

// continue;=> 건너뛰기
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) continue;
//   document.write(i, "<br/>");
// }

// for (let i = 1; i <= 3; i++) {
//   for (let k = 1; k <= 2; k++) {
//     document.write(`${i}형 ${k}열`, "<br/>");
//   }
//   document.write("<br/>");
// }

// for()
// forEach() => 반복시킬 요소의 아이템을 자동 반복시켜줌

const marvels = ["iroman", "hulk", "captin", "stranger"];

// for (let i = 0; i < marvels.length; i++) {
//   console.log(marvels[i]);
// }

// function => 콜백(call back)함수 함수안에 함수는 => 콜백
// function() =>  (인자값) 하나씩 단수
// marvels.forEach(function (marvel) {
//   console.log(marvel);
// });

// => 마블안에 있는 아이템주는 거뿐만아니라 가가의 인뎃값도 알수있음
// marvels.forEach(function (marvel, index) {
//   console.log(marvel, index);
// });

marvels.forEach(function (marvel, index, array) {
  console.log(marvel, index, array);
});

// 유사배열
