// 현재 날짜
const now = new Date();
// 처음본날
const firstday = new Date("2024-12-19");
// 시간 = 밀리초
const tonow = now.getTime();
// 처음본날부터 경과된 시간
const tofirst = firstday.getTime();
// 처음만난날 부터 오늘까지 지나간 밀리초 계산
const passdtime = tonow - tofirst;
// 밀리초에서 날짜로 계산 round = 반올림 함수
const passedday = Math.round(passdtime / (24 * 60 * 60 * 1000));
console.log(passedday);


// 값 담기
document.querySelector("#accent > span").innerText = `${passedday}일`;

// // 100일 계산
// let future = tofirst + 100 * (24 * 60 * 60 * 100);
// let soemday = new Date(future);
// // 년월일 찾아오기
// let year = soemday.getFullYear();
// let month = soemday.getMonth() + 1;
// let date = soemday.getDate();
// document.querySelector("#date").innerText = `${year}년 ${month}월 ${date}일`;

//  반복적인 코드 사용하지 않기 위해 함수 사용
const calcDate = (days) => {
  let future = tofirst + days * (24 * 60 * 60 * 100);
  let soemday = new Date(future);
  let year = soemday.getFullYear();
  let month = soemday.getMonth() + 1;
  let date = soemday.getDate();
  // document.querySelector("#date" + days).innerText = `${year}년 ${month}월`;
  document.querySelector(
    "#date" + days
  ).innerText = `${year}년 ${month}월 ${date}일`;

};
calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

// --- 변수선언을 let으로 한 이유 ---

// 200일 계산
// future = tofirst + 200 * (24 * 60 * 60 * 100);
// soemday = new Date(future);
// // 년월일 찾아오기
// year = soemday.getFullYear();
// month = soemday.getMonth() + 1;
// date = soemday.getDate();
// document.querySelector("#date200").innerText = `${year}년 ${month}월 ${date}일`;

// // 200일 계산
// future = tofirst + 200 * (24 * 60 * 60 * 100);
// soemday = new Date(future);
// // 년월일 찾아오기
// year = soemday.getFullYear();
// month = soemday.getMonth() + 1;
// date = soemday.getDate();
// document.querySelector("#date365").innerText = `${year}년 ${month}월 ${date}일`;

// // 200일 계산
// future = tofirst + 200 * (24 * 60 * 60 * 100);
// soemday = new Date(future);
// // 년월일 찾아오기
// year = soemday.getFullYear();
// month = soemday.getMonth() + 1;
// date = soemday.getDate();
// document.querySelector("#date500").innerText = `${year}년 ${month}월 ${date}일`;

// --- 변수선언을 let으로 한 이유 ---
//  반복적인 코드 사용하지 않기 위해 함수 사용
