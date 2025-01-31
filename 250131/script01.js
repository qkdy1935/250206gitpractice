// // tag 속성값
// console.log(document.querySelector("h1"));

// // id 속성값
// console.log(document.querySelector("#profile"));
// // class 속성값
// console.log(document.querySelector(".imgSrc"));
// // 복수의 class 속성값 All
// console.log(document.querySelectorAll(".user"));

// // id와 class 속성값을 혼용해서 만들었을 경우 => querySelector

// // id위주의 속성값을 만들었을 경우 => getElementById
// console.log(document.getElementById("profile"));
// // class
// console.log(document.getElementsByClassName("imgSrc"));
// //  tag
// console.log(document.getElementsByTagName("h1"));
// 약속 한 문서 안에서의 동일한 id값을 하나만 사용한다.
// 속도는 getElementById 가 빠름 -> id라는 속성이 붙어있는 속성만 읽어서 찾음 => 메모리의 효율성

// querySelector HTML문서를 전체읽은 후 찾아옴

// .innerText tag(node) 안쪽 요소의 값을 찾아올 때
// console.log(document.querySelector("#desc").innerText);
// => 스타일 시트에서 display: none을 주면 보이지 않음

// console.log(document.querySelector("#desc").textContent);
// => 스타일 시트에서 display: none을 주어도 보여짐

// /innerHTML tag까지 같이 찾아올때
// console.log(document.querySelector("#desc").innerHTML);

// EVENT
// 아이유라는 텍스트를 틀릭하면 태연이라는 이름으로 바뀌게 함

//My Profile 영문 텍스트를 틀릭하면 마이 텍스트라는 한글로 변경하고 싶음
const title = document.querySelector("h1");
const userName = document.querySelectorAll("#desc > p")[0]; /* 인덱스 값 [] */
const pfImg = document.querySelector("#profile > img");

// title.onclick = () => {
//   title.innerText = "나의 프로필";
// };

// = > 이벤트 부여 addEventListener(최신 문법 / 보편적 사용) 이전에 .onclick 사용
// on 으로 시작 => 이벤트 실행 => 이벤트 핸들러

title.addEventListener("click", () => {
  title.innerText = "마이 프로필";
  title.style.backgroundColor = "black"; /* 객체  => style 사용 */
  title.style.color = "#fff";
}); /* innerText = > 텍스트로만 인식  */

userName.addEventListener("click", () => {
  userName.innerHTML = "이름 : <b>태연</b>";
  pfImg.src = "https://thumb.mt.co.kr/06/2022/04/2022041909230962447_1.jpg";
  if (!userName.classList.contains("active")) {
    userName.classList.add("active");
  } else {
    userName.classList.remove("active");
  }
  // userName.classList.add("active");
}); /* 두껍게 => 원본에 존재하지 않는 태그사용 => innerHTML 사용  */

// contains 있음 트루 없음 펄스 값 반환

// document.querySelector("h1").innerText;

// console.log(document.querySelectorAll("#desc p")[0].classList);
// classList =>  DOMTokenList => 해당 노드의 class값을 배열의 형태로 찾아옴
