// 페이지 로드 후 실행되는 함수
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const username = document.getElementById("username");
  const userId = document.getElementById("id");
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");

  // 폼 제출 시 이벤트 처리
  form.addEventListener("submit", function (e) {
    // 기본 폼 제출을 막고, 검증을 진행
    e.preventDefault();

    // 빈 값 체크
    if (username.value.trim() === "") {
      alert("이름을 입력해주세요.");
      username.focus();
      return;
    }

    if (userId.value.trim() === "") {
      alert("아이디를 입력해주세요.");
      userId.focus();
      return;
    }

    if (password1.value.trim() === "" || password2.value.trim() === "") {
      alert("비밀번호를 입력해주세요.");
      password1.focus();
      return;
    }

    // 비밀번호 일치 여부 체크
    if (password1.value !== password2.value) {
      alert("비밀번호가 일치하지 않습니다.");
      password2.focus();
      return;
    }

    // 모든 검증을 통과한 경우
    alert("로그인 정보가 올바르게 입력되었습니다!");
    form.submit(); // 검증을 통과하면 폼을 제출
  });

  // 소셜 로그인 버튼 클릭 이벤트
  // const naverLoginBtn = document.querySelector(".social-item .naver");
  // const kakaoLoginBtn = document.querySelector(".social-item .kakao");
  // const googleLoginBtn = document.querySelector(".social-item .google");

  // naverLoginBtn.addEventListener("click", function () {
  //   alert("네이버로 로그인");
  // 여기서 네이버 로그인 API를 호출하는 코드를 추가할 수 있습니다.
  // });

  // kakaoLoginBtn.addEventListener("click", function () {
  //   alert("카카오로 로그인");
  // 카카오 로그인 API를 추가하는 코드
  // });

  // googleLoginBtn.addEventListener("click", function () {
  //   alert("구글로 로그인");
  // 구글 로그인 API를 호출하는 코드 추가
  //   });
});
