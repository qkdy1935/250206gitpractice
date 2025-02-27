//  재너레이터 함수를 사용
//  이터러브란 객체를 만듬

const button = document.querySelector("button");
const result = document.querySelector("#result");

function* train() {
  yield "판교";
  yield "이매";
  yield "삼동";
  yield "경기광주";
  yield "초월";
  yield "곤지암";
  yield "신둔도예촌";
  yield "이천";
  yield "세종대왕릉";
  yield "여주";
}

const gyenggang = train();
button.addEventListener("click", () => {
  let current = gyenggang.next();
  if (current.done !== true) {
    result.innerText = current.value;
  } else {
    result.innerText = "종점!";
    button.setAttribute("disabled", "desabled");
  }
});
