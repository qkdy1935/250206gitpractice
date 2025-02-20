const eyeIcon = document.querySelector(".main i");
const input = document.querySelector("input");

eyeIcon.addEventListener("click", () => {
  input.classList.toggle("active"); // toggle = 클래스값을 주고 뺴는 add,remove를 두개 다 가진 함수

  if (input.classList.contains("active")) {
    // contains = 클래스값을 제어하능 ㅗㅅㄱ성
    input.type = "text";
    eyeIcon.className = "fas fa-eye-slash";
  } else {
    input.type = "password";
    eyeIcon.className = "fas fa-eye";
  }
});
