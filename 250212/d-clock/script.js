const displayDate = document.querySelector("#today");

const today = new Date();
const year = today.getFullYear();
const morth = today.getMonth() + 1;
const date = today.getDate();

// 요일 정의하기
const day = today.getDay();

let day2;

switch (day) {
  case 0:
    day2 = "일요일";
    break;
  case 1:
    day2 = "원요일";
    break;
  case 2:
    day2 = "화요일";
    break;
  case 3:
    day2 = "수요일";
    break;
  case 4:
    day2 = "목요일";
    break;
  case 5:
    day2 = "금요일";
    break;
  case 6:
    day2 = "토요일";
    break;
}

displayDate.innerText = `${year}년 ${morth}월 ${date}일 ${day2}`;

//  시간

const displayTime = document.querySelector("#clock");
const clock = () => {
  const current = new Date();
  let hrs = current.getHours();
  let mins = current.getMinutes();
  let secs = current.getSeconds();

  let period = "AM";
  if (hrs === 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }
  // 한자리수가 나오지 않게 삼항조건문 사용
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  displayTime.innerText = `${period} ${hrs}시 ${mins}분 ${secs}초`;
};

// 1초마다 움직임
setInterval(clock, 1000);
