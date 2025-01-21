// const x = 10;
// const y = 4;

// let result;

// // 산술연산자
// result = x / y;
// console.log(result);

// // 나머지
// result = x % y;
// console.log(result);

// 증감연산자
// let a = 10;
// console.log(a);

// a = ++a;
// console.log(a);

// a = --a;
// console.log(a);

// let x = 10;
// let y = 4;
// let result;
// => 축약
// let x = 10,
//   y = 4,
//   result;

// result = x + y--;
// result = x + --y; // 증감연산자의 트릭 * 위치가 중요
// console.log(result);
// console.log(y);

// 변수를 선언하고 주석처리를 하고 사용하지 않아도 컴퓨터
// 메모리에는 계속 쌓여 과부하가 생김
// Garbage Collector = GC = >쓰레기통

// 연결연산자
// const actor = "현빈";
// const movie = "하얼빈";

// // const result = actor + "님은" + movie + "에 출연하였습니다!";
// // console.log(result);

// const result = `${actor}님은 ${movie}에 출연하였습니다!`;
// console.log(result);

// 비교연산자
// let x = 3,
//   y = 3;

// y = x + 3;
// y += x;
// y *= x;
// y %= x;
// console.log(y);

let str = "<table border='1'>"; // 큰 "" 안에 작은'' 만 가능
str += "<tr>";
str += "<td>1</td><td>2</td><td>3</td>";
str += "</tr>";
str += "</table>";

document.write(str);

// 비교연선저
// console.log(3 == "3");
// console.log(3 === "3");

// console.log(3 != "3");
// console.log(3 !== "3");

// 논리연산자
// let a = 10,
//   b = 20;

// console.log(a > 10 || b > 20);
// console.log(a <= 10 || b > 20); // 두가지 중 하나라도 참이면 참이다 (논리연산자)
// console.log(a <= 10 && b > 20); // &&연산자는 두가지 모두가 참이어야 함

// "삼항 =3항" 조건연산자
let a = 10,
  b = 3;

// let result = a > b ? console.log("Javascript") : console.log("Typescript");

// 축약형
// let result = a > b ? "Javascript" : "Typescript";
// console.log(result);

let result = a < b ? "Javascript" : "Typescript";
console.log(result);
