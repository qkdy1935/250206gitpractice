// 한글로 지금 내가 제어하고자 하는 내용이 무엇인지 먼저 작성해보기

// 논리적

// 내가 현재 구현하고자 하는 기능을 말로 표현하지 못한다면 100% 코딩은 불가하다

// 우리는 8개의 면들을 가지고 모션을 제어

// 8개의 face(면))들을 대상으로 모션 제어

// 컴퓨터에게 무엇이 8개의 face인지 먼저 알려주기

// 8개의 face를 어딘가에 담아서 컴퓨터에게 "이게 8개의 face야" 라고 알려주기

// 그 어딘가에 담고자 하는 그 그릇을 컴퓨터 용어로는 "변수"

// 해당 모션 : 각각의 face에 마우스를 올리면 회전이 멈춤

// 해당 모션 : 각각의 face에서 마우스가 떠나가면 회전이 정상적으로 진행

// 변수 선언 : const "변수이름(직관적인이름)" document=html문서 querySelector =선택자(변수)

// console.log(circle); = console 창확인

// 반복문을 실행할려면 반복할 개체 찾아오기

// () => { 콜백함수  . 이벤트 부여 addEventListener

const circle = document.querySelector("#circle");
const articles = circle.querySelectorAll("article");

console.log(articles);

articles.forEach((article) => {
  article.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused";
  });
  article.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running";
  });
});
