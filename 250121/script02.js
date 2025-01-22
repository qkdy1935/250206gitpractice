// 사용자에게 12개월 중 좋아하는 월의 정보를 입력 받으세요 ex) 1 => 1월

// 12월 ~ 2월 : 스키의 계절, 겨울을 좋아하시네요

// 3월 ~ 5월 : 책 읽기 좋은 봄을 좋아하시네요

// 6월 ~ 8월 : 여행가기 좋은 여름을 좋아하시네요

// 9월 ~ 11월 : 선선한 날씨인 가을을 좋아하시네요

// if조건문을 활용해서 코드 출력

// const day = prompt("가장 좋아하는 월을 입력하세요!");

// if (day) {
//   if (Number(day) === 12 || Number(day) === 2 || Number(day) === 1) {
//     alert(`스키의 계절, 겨울을 좋아하시네요`);
//   } else if (Number(day) === 5 || Number(day) === 3 || Number(day) === 4) {
//     alert(`책 읽기 좋은 봄을 좋아하시네요`);
//   }
//   else if(Number(day) === 8 || Number(day) === 6 || Number(day) === 7) {
//     alert(`여행가기 좋은 여름을 좋아하시네요`);
//   }
//   else if(Number(day) >= 11 || Number(day) >= 9) {
//     alert(`선선한 날씨인 가을을 좋아하시네요`);
//   }
// }

let favorit = prompt("가장 좋아하는 월을 입력하세요");

if (favorit !== "" || favorit !== null) {
  favorit = parseInt(favorit);
  if (3 <= favorit && favorit <= 5) {
    alert(`책 읽기 좋은 봄을 좋아하시네요`);
  } else if (6 <= favorit && favorit <= 8) {
    alert(`여행가기 좋은 여름을 좋아하시네요`);
  } else if (9 <= favorit && favorit <= 11) {
    alert(`선선한 날씨인 가을을 좋아하시네요`);
  } else if (isNaN(favorit) || 0 === favorit) {
    alert(`정상적인 월을 입력하세요`);
  } else {
    console.log(favorit, typeof favorit);
    alert(`스키의 계절, 겨울을 좋아하시네요`);
  }

  window.location.reload();
}
