document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");
  const idInput = document.getElementById("id");
  const passwordInput = document.getElementById("password");
  const loginButton = document.querySelector(".login-button.secondary");
  const registerButton = document.querySelector(".login-button.primary");
  const socialButtons = document.querySelectorAll(".social");

  // 로그인 버튼 클릭 이벤트
  loginButton.addEventListener("click", function (event) {
    event.preventDefault(); // 폼 기본 제출 동작 방지

    const idValue = idInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (idValue === "" || passwordValue === "") {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    // 로그인 로직 (백엔드 API 연동 가능)
    alert(`로그인 시도: ID - ${idValue}`);
  });

  // 회원가입 버튼 클릭 이벤트
  registerButton.addEventListener("click", function () {
    alert("회원가입 페이지로 이동합니다.");
    // 실제 회원가입 페이지로 이동하는 경우
    // window.location.href = "signup.html";
  });

  // 소셜 로그인 버튼 클릭 이벤트
  socialButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (button.classList.contains("naver")) {
        console.log("네이버 로그인 버튼 클릭");
      } else if (button.classList.contains("kakao")) {
        console.log("카카오 로그인 버튼 클릭");
      } else if (button.classList.contains("google")) {
        console.log("구글 로그인 버튼 클릭");
      }
    });
  });
});
