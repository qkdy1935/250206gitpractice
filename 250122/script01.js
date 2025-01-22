// const marvels = ["Iroman", "Spiderman", "Thor", "Stranger"];

// 초기값 조건식 증감문 =>
// of => 여러개 중 하나(배열 사용 => 객체에서는 불가)
// // in  ~ 안에(객체 사용)
//for(let marvel of marvels) // marvels(복수) 안에 marvel(변수이름/단수)이라는 이름으로 하나 찾아오겠다.

// for (let marvel of marvels) {
//   console.log(marvel);
// }
// => 결과값 :  Iroman Spiderman Thor Stranger

// const jsbook = { // 객체
//   title: "재미있는 자바스크립트", // key + 벨류 = 프로퍼티
//   pubDate: "2025-03-01",
//   pages: 270,
//   finished: true,
//   review: function () {
//     console.log("겁나재밌어요");(=> 메소드)
//   },
// };

// for (let key in jsbook) {
// console.log(key);
//}
// => 결과값 : title pubDate pages finished review

// for (let key in jsbook) {
//   console.log(`${key} : ${jsbook[key]}`);
// }
/* => 결과값
  title: "재미있는 자바스크립트",
  pubDate: "2025-03-01",
  pages: 270,
  finished: true,
  review: function () {
    console.log("겁나재밌어요") */

/* let stars = parseInt(prompt("별의 개수 :")); */

// while (stars > 0) {
//   document.write("⭐"); //while문
//   stars--;
// }

//do while문 (do = 실행)
/*
  do {
  } while ()
*/
/*
do {
  document.write("⭐");
  stars--;
} while (stars > 0);
*/
