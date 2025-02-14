// 사용자에게 지름과 높이의 값을 받아서 원기둥의 부피를 구하는 프로그램 코드를 작성하세요
// 원기둥의 부피 구하는 공식 = 밑면적 * 높이
// 밑면적 구하는 공식 = Math.PI * R * R
// R = 반지름

// 단, 어떤 원기둥을 예상하더라도 해당결과 값이 출력 될 수 있도록 생성자 함수로 코드를 구현

/*  값
받아야 하는 값 지름, 높이

나오는 값 원기둥의 부피
필요한 값 : 반지름, 밑면적, 
반지름 : 지름 나누기 2 (/ 2)
밑면적 : Marh.PI * 반지름 * 반지름
최종 부피값 : 밑면적 * 높이

이벤트 요소 = 버튼
*/

// 받아야 하는 값 (기준)
// const diament = document.querySelector("#cyl-diament"); // 지름
// const height = document.querySelector("#cyl-height"); // 높이

// but.addEventListener("click")
// const but = document.querySelector("li > input[type='button']");
// console.log(but);

// // 반지름
// let radius = () => {
//   diament / 2;
// };

// //밑면적
// let area = () => {
//   Math.PI * radius * radius;
// };

// // 최종값
// let volume = () => {
//   area * height;
// };

// radius();
// area();
// volume();
// console.log(volume());

// 생성자 함수
//  생성자 함수를 사용해야하는 이유 - 반복적인 패턴의 객체를 보다 효율적으로 만들어내기 위한 목적 => 정확한 속성값 관리

// 이벤트 트리거 버튼 (누르면 값이 나옴)
const button = document.querySelector("input[type='button']");

// 값을 담는 공간
const result = document.querySelector("#result");

// 생성자 함수
function Cylider(CylDiamenter, CylHeight) {
  this.diamenter = CylDiamenter;
  this.height = CylHeight;
  this.getVolume = function () {
    const radius = this.diamenter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  };
}

// 버튼은 폼안의 자식요소임 (폼 자식요소를 이벤트로 사용할떄는 e.preventDefault();
button.addEventListener("click", (e) => {
  e.preventDefault(); // 이벤트 기본값 사용X
  const diamenter = document.querySelector("#cyl-diament").value; // 지름
  const height = document.querySelector("#cyl-height").value; // 높이

  if (diamenter === "" || height === "") {
    result.innerText = "지름과 높이 값을 입력하세요";
  } else {
    const cylider = new Cylider(parseInt(diamenter), parseInt(height));
    result.innerText = `원기둥의 부피는 ${cylider.getVolume}입니다.`;
  }
});

// 인풋태그는 문자열이기 때문에 값을 구할때 숫자로 변경
