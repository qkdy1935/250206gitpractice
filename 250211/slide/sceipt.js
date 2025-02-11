const btns = document.querySelector(".controls");
const prbtn = btns.querySelector(".prev");
const nextbtn = btns.querySelector(".next");

const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");

// slide 갯수
const slideCount = slide.length;
// width 값
const slideW = 200;
// margin 값
const slideM = 30;

// 페이지 = li의 index값 순서
let correntIdex = 0;

// 초기화 함수
// 복제된 li 다시 찾아오기
const undate = () => {
  const correntSLides = document.querySelectorAll(".slides li");
  const newslideCount = correntSLides.length;
  // 복제된 상태에서 가운데값 다시 구하기
  const newWidth = `${(slideW + slideM) * newslideCount - slideM}px`;
  slides.style.width = newWidth;
};

const setInitialPos = () => {
  const initialTranslateValue = -(slideW + slideM) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
};

// 슬라이더가 끝나는 지점에서 다시 시작하기 위해 복제
const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }

  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }

  undate();
  setInitialPos();
  setTimeout(() => {
    slides.classList.add("anymated");
  }, 100);
};

makeClone();

// 왼쪽(next) 이동
const moveSlide = (num) => {
  slides.style.left = `${-num * (slideW + slideM)}px`;
  correntIdex = num;

  // 무한슬라이더
  // 복제한 1번이 원본 1번가 위치가 같아진다면 원본으로 교체
  // nextbtn,prbtn 왼 오 다섯번
  if (correntIdex === slideCount || correntIdex === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("anymated");
      slides.style.left = "0px";
      correntIdex = 0;
    }, 500);
    // correntIdex = 0;  = 다시 백하는 느낌 transition 뺴기
  }
  // setTimeout = 특정시간 후에
  setTimeout(() => {
    slides.classList.add("anymated");
  }, 600); /*0.6초 이후*/
};

// click후 1부터 시작
nextbtn.addEventListener("click", () => {
  moveSlide(correntIdex + 1);
});

// prev버튼 click => 오른쪽으로 이동
prbtn.addEventListener("click", () => {
  moveSlide(correntIdex - 1);
});

// 자동 슬라이드
let timer = undefined;

const autoSlide = () => {
  if (timer === undefined) {
    timer = setInterval(() => {
      moveSlide(correntIdex + 1);
    }, 3000);
  }
};

autoSlide();

const stopSlide = () => {
  clearInterval(timer);
  timer = undefined;
};

slides.addEventListener("mouseenter", () => {
  stopSlide();
});

slides.addEventListener("mouseleave", () => {
  autoSlide();
});

btns.addEventListener("mouseenter", () => {
  stopSlide();
});

btns.addEventListener("mouseleave", () => {
  autoSlide();
});
