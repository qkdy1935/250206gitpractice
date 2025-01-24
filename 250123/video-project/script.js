const articles = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

articles.forEach((article) => {
  article.addEventListener("mouseenter", (event) => {
    event.target.querySelector("video").play(); // 비디오 플레이
  });
  article.addEventListener("mouseleave", (event) => {
    event.target.querySelector("video").pause(); // 비디오 정지
  });
  article.addEventListener("click", (event) => {
    const tit = event.currentTarget.querySelector("h2").innerText;
    const txt = event.currentTarget.querySelector("p").innerText;
    const vidSsc = event.currentTarget
      .querySelector("video")
      .getAttribute("src"); // 동영상 소스 값

    aside.querySelector("h1").innerText = tit;
    aside.querySelector("p").innerText = txt;
    aside.querySelector("video").setAttribute("src", vidSsc); // 속성 값 매칭

    aside.classList.add("on"); // 컨텐츠 슬라이드 이벤트
    aside.querySelector("video").play(); // 동영상재생
  });
  close.addEventListener("click", () => {
    aside.classList.remove("on"); // 컨텐츠 슬라이드 이벤트 닫기
    aside.querySelector("video").pause();
  });
});
