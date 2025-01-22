// 구구단!! 2단~9단

// for(let a = 2; a <= 9; a++) 초기값 조건식 증가문
// document.write() => 온점 표기법(값불러올떄), 객체

// for (let a = 2; a <= 9; a++) {
//   document.write("<h2>" + a + "단" + "</h2>");
//   for (let b = 1; b <= 9; b++) {
//     document.write(`${a} x ${b} = ${a * b}`);
//     document.write("<br/>");
//   }
// }

// 테이블 5행 5열

let num = 1;
let tag = "<table border=1>";

for (let i = 1; i <= 5; i++) {
  tag += "<tr>";
  for (let c = 1; c <= 5; c++) {
    tag += "<td>" + num + "</td>";
    num++;
  }
  tag += "</tr>";
}
tag += "</table>";

document.write(tag);
