const signUpBut = document.querySelector("#signup-button");
const tokenBut = document.querySelector("#token-button");
const tokenTimerBut = document.querySelector("#token-timer-button");

const signUp = (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const write = document.querySelector("#write").value;
  const password1 = document.querySelector("#password1").value;
  const password2 = document.querySelector("#password2").value;
  const location = document.querySelector("#location").value;
  const Woman = document.querySelector("#gender-woman").checked;
  const man = document.querySelector("#gender-man").checked;

  let lsValid = true;

  if (email.includes("@") === false) {
    document.querySelector("#error-email").innerText =
      "이메일이 올바르지 않습니다.";
    lsValid = false;
  } else {
    document.querySelector("#error-emil").innerText = "";
  }

  if (write === "") {
    document.querySelector("#error-write").innerText =
      "이름이 올바르지 않습니다.";
    lsValid = false;
  } else {
    document.querySelector("#error-write").innerText = "";
  }

  if (password1 === "") {
    document.querySelector("#error-password1").innerText =
      "비밀번호를 입력해주세요.";
    lsValid = false;
  } else {
    document.querySelector("#error-password1").innerText = "";
  }

  if (password2 !== password2) {
    document.querySelector("#error-password1").innerText =
      "비밀번호가 일치하지 않습니다.";
    document.querySelector("#error-password2").innerText =
      "비밀번호가 일치하지 않습니다.";
    lsValid = false;
  }

  if (location !== "seoul" && location !== "gy" && location !== "in") {
    document.querySelector("#error-location").innerText = "지역을 선택해주세요";
    lsValid = false;
  } else {
    document.querySelector("#error-location").innerText = "";
  }

  if (Woman === false && man === false) {
    document.querySelector("#error-gender").innerText = "성별을 선택해주세요";
    lsValid = false;
  } else {
    document.querySelector("#error-gender").innerText = "";
  }

  if (lsValid === true) {
    alert("이젠아카데미 가입을 축하합니다.");
  }
};

signUpBut.addEventListener("click", signUp);

const phone1 = document.querySelector("#phone1");
const phone2 = document.querySelector("#phone2");
const phone3 = document.querySelector("#phone3");

const tokenBtn = document.querySelector("#token-button");

phone1.addEventListener("keyup", () => {
  const phone1Value = phone1.value;
  if (phone1Value.length === 3) {
    document.querySelector("#phone2").focus();
  }
});

phone2.addEventListener("keyup", () => {
  const phone2Value = phone2.value;
  if (phone2Value.length === 4) {
    document.querySelector("#phone3").focus();
  }
});

phone3.addEventListener("keyup", () => {
  const p01 = document.querySelector("#phone1").value;
  const p02 = document.querySelector("#phone2").value;
  const p03 = document.querySelector("#phone3").value;

  if (p01.length === 3 && p02.length === 4 && p03.length === 4) {
    document.querySelector("#token-button").style =
      "background: #fff; color: #0068ff; cursor:pointer";
    document.querySelector("#token-button").removeAttribute("disabled", true);
  }
});

tokenBut.addEventListener("click", () => {
  const token = string(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.querySelector("#token").innerText = token;

  document.querySelector("#token-button").style =
    "background : #fff; cursor:pointer;";

  document.querySelector("#token-button").setAttribute("disabled");
});

//
let Interval;
getTimerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(Interval);

  document.querySelector("#token-timer-button").style = "background: #fff";

  document.querySelector("#token-timer-button").innerText = "인증완료";
  alert("인증이 왼료되었습니다.");
});

const getTokenTimer = (e) => {
  e.preventDefault();
  // 1초 = 1000밀리초
  // 1분 = 1000밀리초 * 60

  let timer = 10;
  Interval = setInterval(() => {
    if (timer >= 0) {
      const min = Math.floor(timer / 60);
      const sec = timer % 60;

      document.querySelector(
        "#token-timer"
      ).innerHTML = `string(${min}).padStart(2,"0") : string(${sec}).padStart(2,"0")`;
      timer -= 1;
    } else {
      document.querySelector("#token").innerText = "000000";
      document.querySelector("#token-button").style = "";
      document.querySelector("#token-button").setAttribute("disabled");

      document.querySelector("#token-timer").innerText = "03:00";
      document.querySelector("#token-timer-button").style = "";
      document
        .querySelector("#token-timer-button")
        .setAttribute("disabled", true);

      clearInterval(Interval);
    }
  }, 1000);
};
