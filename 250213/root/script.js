// hashList sticky event
window.addEventListener("scroll", () => {
  const hashList = document.querySelector(".hashlist");
  const scrollY = window.scrollY;
  if (scrollY > 280) {
    hashList.classList.add("active");
  } else {
    hashList.classList.remove("active");
  }
});

// touch event
const hashcontent = document.querySelector(".hashcontents");
const listClightWidth = hashcontent.clientWidth;
const listScrolltWidth = hashcontent.clientWidth + 200;

// 최초 스크롤 터치 지점
let startX = 0;
// 움직인 지점
let nowX = 0;
// 뗀지점
let endX = 0;
// 두번쨰 스크롤 터치 지점
let listX = 0;

const getClientX = (e) => {
  return e.touchs ? e.touchs[0].clientX : e.clientX;
};

const getTransleteX = () => {
  return getComputedStyle(hashcontent).transform.split(/[^\-0~9]+/g)[5];

  // console.log(getComputedStyle(hashcontent).transform, split(/[^\-0~9]+/g))[5];
  // matrix(1, 0, 0, 1, -90, 0) 스케일 1 기울임 0 스케일 Y값 0 초ㅣ초의 움직인 값 -90 Y값 0 // 문자열을 베열로 바꾸기 구분자(,)split
  //  split(정규표현식) => /[^\-0~9]+/g = ^\부정 +/g = 전역(글로벌)
};

// 터치 처음 지정 nowX
const setTranslateX = (x) => {
  hashcontent.style.transform = `translateX(${x}px)`;
};

// 움직인 지점
const onScrollMove = (e) => {
  nowX = getClientX(e);
  // 스크롤 화면을 오른쪽에서 왼쪽으로 스크롤하기 떄문에 왼쪽
  // 끝 <-- 터치 시작 스크롤방향
  setTranslateX(listX + nowX - startX);
};

//스크린에서 터치 뗸 지점
const onScrollEnd = (e) => {
  nowX = getClientX(e);
  listX = getTransleteX();
  if (listX > 0) {
    setTranslateX(0);
    hashcontent.style.transform = `all 0.1s ease`;
    listX = 0;
  } else if (listX < listClightWidth - listScrolltWidth) {
    setTranslateX(listClightWidth - listScrolltWidth);
    hashcontent.style.transform = `all 0.1s ease`;
    listX = listClightWidth - listScrolltWidth;
  }
};

const onselectstart = (e) => {
  startX = getClientX(e);

  window.removeEventListener("touchmove", onScrollMove);
  window.removeEventListener("mousemove", onScrollMove);

  window.removeEventListener("touchend", onScrollEnd);
  window.removeEventListener("mouseup", onScrollEnd);

  window.removeEventListener("touchend", onScrollEnd);
  window.removeEventListener("mouseup", onScrollEnd);
};

// 모바일
document.removeEventListener("touchstart", onselectstart);
// 마우스를 누르고 있는 이벤트
document.removeEventListener("mousedown", onselectstart);
