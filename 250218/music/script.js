const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article"); // NodeList (유사배열)

// 메인 돌아가면 음악 멈춤
const audios = frame.querySelector("audio");
console.log(audios);

// 음악 바꾸는 버튼
const prev = document.querySelector(".btnprev");
const next = document.querySelector(".btnnext");

// 45도의 각도로 움직임
const deg = 45;

// 0번부터 시작해서 8개의 아이템을 반복문을 사용해서 45도의 각도로 돌림 (인덱스 값 0~8)
let i = 0;

lists.forEach((list) => {
  const pic = list.querySelector(".pic"); //이미지 변수선언

  // 버튼
  const play = list.querySelector(".play"); // 재생
  const pause = list.querySelector(".pause"); // 멈춤
  const load = list.querySelector(".load");

  // 해당 아이템 각각의 스타일을 정의함
  // translateY(-100vh) 각도를 유지하면 큰 원을 그리면서 화면 바깥으로 빠짐
  // 위치를 아래로 옮김 => css에서 정의
  list.style.transform = `rotate(${i * deg}deg) translateY(-100vh)`;

  // 이미지 하나하나씩 개별적으로 넣기 list (복수x)
  // const pic = list.querySelector(".pic");
  pic.style.backgroundImage = `url("./img/member${i + 1}.jpg")`;

  // 증가
  i++;

  // 버튼 클릭 이벤트
  // closest는 DOM에서 가장 가까운 상위 요소를 찾을 때 사용하는 메서드
  // 음악 재생 , 멈춤, 처음부터
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
      .classList.remove("on");

    e.currentTarget.closest("article").querySelector("audio").pause();
    e.currentTarget.closest("article").querySelector("audio").play();
  });
});

//  버튼
let num = 0;

// 메인에 오는 박스가 가상클래스 on 받도록
let active = 0; // 0번쨰 인덱스
const len = lists.length - 1;

const activation = (index, lists) => {
  //  개별적인 요소들을 찾아옴
  lists.forEach((list) => {
    list.classList.remove("on");
  });
  lists[index].classList.add("on");
};

// 다음 버튼
next.addEventListener("click", () => {
  num--;

  frame.style.transform = `rotate(${num * deg}deg)`;

  active === len ? (active = 0) : active++;
  activation(active, lists);
});

// 이전 버튼
prev.addEventListener("click", () => {
  num++;

  frame.style.transform = `rotate(${num * deg}deg)`;

  active === len ? (active = len) : active--;
  activation(active, lists);
});

// 메인 이 바뀌면서 재생되고 있는 음악도 멈추고 싶을떄
// 음악 초기화
const initMusic = () => {
  audios.forEach((audio) => {
    audio.pause();
    audio.load();
    // audio.parentElement.;
  });
};
