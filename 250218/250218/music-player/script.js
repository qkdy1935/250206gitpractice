// API이미지
const gerImg =
  "https://api.unsplash.com/photos/random/?client_id=YOUR_ACCESS_KEYtbO6NotVDXbWvp1bTkJZ9N99ufKCibRf-rNX6Av8J_c ";
//브라우저에서 출력할 수 있도록 변환 = 변환 함수 => fetch 사용
// 데이터 정상 찾아오면 => then() 메서드 함수
// 데이터 정상 찾아오지 못하면 => catch() 메서드 함수 error = e // event혼동 주의
fetch(gerImg)
  .then((response) => response.json()) // 메서드 체이닝(체인) 기법 메서드에 메서드가 체인처럼 묶여있을때
  .then((result) => console.log(result))
  .catch((error) => {
    console.error("이미지 로드 중 에러 발생!", error); // 에러가 발생할떄 사용되는 함수
  });

const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const audios = frame.querySelectorAll("audio");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

// article rotation
const deg = 45;
let i = 0;
lists.forEach((list) => {
  const pic = list.querySelector(".pic");
  const play = list.querySelector(".play");
  const pause = list.querySelector(".pause");
  const load = list.querySelector(".load");

  list.style.transform = `rotate(${i * deg}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url("./img/member${i + 1}.jpg")`;
  i++;

  play.addEventListener("click", (e) => {
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.add("on");

    e.currentTarget.closest("article").querySelector("audio").play();
  });

  pause.addEventListener("click", (e) => {
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.remove("on");

    e.currentTarget.closest("article").querySelector("audio").pause();
  });

  load.addEventListener("click", (e) => {
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.add("on");

    e.currentTarget.closest("article").querySelector("audio").load();
    e.currentTarget.closest("article").querySelector("audio").play();
  });
});

// button event
let num = 0;
let active = 0;
const len = lists.length - 1;

const activation = (index, lists) => {
  lists.forEach((list) => {
    list.classList.remove("on");
  });
  lists[index].classList.add("on");
};

const initMusic = () => {
  audios.forEach((audio) => {
    audio.pause();
    audio.load();
    audio.parentElement.previousElementSibling.classList.remove("on");
  });
};

prev.addEventListener("click", () => {
  initMusic();
  num++;
  frame.style.transform = `rotate(${num * deg}deg)`;

  active === 0 ? (active = len) : active--;
  activation(active, lists);
});

next.addEventListener("click", () => {
  initMusic();
  num--;
  frame.style.transform = `rotate(${num * deg}deg)`;

  active === len ? (active = 0) : active++;
  activation(active, lists);
});
