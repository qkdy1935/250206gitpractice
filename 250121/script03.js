// // 사용자의 로그인을 허락해주고 한다
// // 정상적인 정보 : 사용자가 로그인을 하기위한 id : EZEN1234
// // pW: 1234567로 설정

// // 사용자의에게 아이디와 패스워드를 받아서 정상적인 정보라면 00님 반갑습니다 라는 알림창이 나오게헤주세요

// //만약 아이디가 잘못된 정보라면 아이디가 일치하지 않습니다.라는 메세지를 알림창으로 전달

// // 만약 패스워드가 잘못된 정보라면 비밀번호가 일치하지 않습니다 라는 정보는 전달해주세요

// // if (null(id) || EZEN1234 === id) {
// //   alert(`아이디가 일치하지 낳습니다`);
// // } else if (pw !== "" || pw !== nall) {
// //   alert(`비밀번호가 일치하지 낳습니다`);
// // }

// // ID = EZEN1234;
// // PW = 1234567;

// let id = prompt(`아이디를 입력해주세요`);
// let pw = prompt(`비밀번호를 입력해주세요`);

// // id = EZEN1234;
// // pw = 1234567;

// if (id) {
//   alert(`아이디가 일치하지 않습니다`);
// } else id === EZEN1234 || pw === 1234567;
// {
//   alert(`반갑습니다`);
// }

// // if (ID) {
// //   alert(`아이디가 일치하지 낳습니다`);
// // }

const id = "ezen1234";
const pw = "1234567";

const userName = prompt("당신의 이름을 입력하세요");
if (userName !== "" && userName !== null) {
  const userId = prompt(`${userName}님 아이디를 입력하세요`);
  if (userId !== "" && userId !== null) {
    if (userId === id) {
    }
    const userpw = prompt(`${userName}님 반갑습니다. 비밀번호를 입력하세요`);
    if (userpw === pw) {
      alert(`${userpw}님 오늘도 좋은하루되세요`);
    } else {
      alert(`비밀번호가 일치하지 않습니다`);
      location.reload();
    }
  } else {
    alert(`아이디를 입력하세요`);
  }
} else {
  alert("정상적인 이름을 입력하세요");
  location.reload();
}
