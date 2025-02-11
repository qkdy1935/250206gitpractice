const playBtn = document.querySelector(".play-pause");
const video = document.querySelector("video");
const progressCover = document.querySelector(".progress");
console.log(progressCover);
const volumeBar = document.querySelector("input[type='range']");
const full = document.querySelector(".fullscrren");
const rateBtns = document.querySelectorAll(".rate");

// 재생버튼
const play = () => {
  playBtn.innerText = "⏸";
  video.play();
};

const pause = () => {
  playBtn.innerText = "▶";
  video.pause();
};

const togglePlay = () => {
  video.paused ? play() : pause();
};

// 재생시간 바꾸기
const formting = (time) => {
  let sec = Math.floor(time % 60); // 초
  let min = Math.floor(time / 60); // 분
  let hour = Math.floor(time / 3600); // 시간

  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;
  hour = hour < 10 ? `0${hour}` : hour;

  return `${hour}:${min}:${sec}`; // 시:분:초 형식으로 반환
};

// 재생시간
// 재생시간 업데이트
const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  // 비디오의 현재 시간과 전체 시간 포맷팅해서 출력
  current.innerText = formting(video.currentTime); // 현재 시간 포맷팅
  duration.innerText = formting(video.duration); // 전체 시간 포맷팅
};

// 재생바
const undateprogress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");
  const duration = video.duration; // 전체 총시간
  const currentTime = video.currentTime; // 경과된 시간
  const percent = (currentTime / duration) * 100;
  progressBar.style.width = `${percent}%`;

  const progressBarWidth = progressCover.clientWidth; // 전체 너비값
  // console.log(progressBarWidth); // 전체너비값 550
  // 너비 100%기준
  const newPosition = (currentTime / duration) * progressBarWidth;
  progressPointer.style.left = `${newPosition}px`;
};

// 소리조절
const setVolum = (e) => {
  video.volume = e.target.value;
};

// 재생속도
const setRate = (e) => {
  const { rate } = e.target.dataset;
  video.playbackRate = rate;
};

playBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", undateprogress);
volumeBar.addEventListener("chang", setVolum);
rateBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    setRate(e);
  });
});
full.addEventListener("click", () => {
  video.requestFullscreen();
});
