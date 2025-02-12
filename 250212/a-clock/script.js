// 1도 = (180/파이)
// 360도 안에 12개 = 각 30도
//

const nums = document.querySelectorAll(".number");

for (let i = 0; i < nums.length; i++) {
  if (i + 1 === 3 || i + 1 === 6 || i + 1 === 9 || i + 1 === 12) continue; // 제외

  const angle = (i + 1) * (Math.PI / 6);
  const x =
    132 - nums[i].offsetWidth + 132 * Math.abs(Math.sin(angle).toFixed(2));
  const y = 132 - 132 * Math.abs(Math.cos(angle).toFixed(2));

  if (i + 1 > 6) {
    nums[i].style.right = `${x}px`;
  } else {
    nums[i].style.left = `${x}px`;
  }

  if ((i + 1 >= 9 && i + 1 <= 12) || (i + 1 >= 1 && i + 1 <= 3)) {
    nums[i].style.top = `${y}px`;
  } else {
    nums[i].style.bottom = `${y}px`;
  }
}

const hourP = document.querySelector("#hour");
const minrP = document.querySelector("#min");
const secsP = document.querySelector("#secs");
const clock = () => {
  const currentTime = new Date();

  // 초 값
  let second = currentTime.getSeconds();
  let secondAngle = second * 6; // 360 나누기 60
  let secondAngleValue = `rotate(${secondAngle}deg)`;

  // 분 값
  let minute = currentTime.getMinutes();
  let minA = minute * 6;
  let minAV = `rotate(${minA}deg)`;

  // 시 값 // 분의 30도를 기분으로 100
  let hour = currentTime.getHours();
  let hourA = hour * 30 + (minute / 60) * 30;
  let hourAV = `rotate(${hourA}deg)`;

  secsP.style.transform = secondAngleValue;
  minrP.style.transform = minAV;
  hourP.style.transform = hourAV;
};

setInterval(clock, 1000);
