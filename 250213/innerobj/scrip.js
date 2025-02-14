const btn = document.querySelector("#btn");

const year = document.querySelector("#year");
const morth = document.querySelector("#morth");
const date = document.querySelector("#date");

const current = document.querySelector("#current");
const rdays = document.querySelector("#days");
const rhours = document.querySelector("#hours");
const rage = document.querySelector("#age");

const today = new Date();
current.innerText = `${today.getFullYear()}년 ${
  today.getMonth() + 1
}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분 현재`;

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const bay = new Date(year.value, orth.value - 1, date.value);

  const passed = today.getTime() - bay.getTime();

  const passedDay = Math.floor(passed / (24 * 60 * 60 * 1000));
  const passedHours = Math.floor(passed / (60 * 60 * 1000));
  const passedAge = Math.floor(passed / (24 * 60 * 60 * 1000) / 365) + 1;

  rdays.innerText = `날짜로는 ${passedDay}일이 흐르고, `;
  rhours.innerText = `시간으로는 ${passedHours}시간이 흐르고, `;
  rage.innerText = `제 나이는 ${passedAge}세 입니다. `;
});
