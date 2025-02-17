const btn = document.querySelector("input[type='button']");
const email = document.querySelector("input[type='email']");
const result = document.querySelector("#result");
/*
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value !== "") {
    let username = email.value.split("@")[0];
    username = username.slice(0, 3);
    let domain = email.value.split("@")[1];

    result.innerText = `${username}***@${domain}`;

    // abc@naver.com = @를 중심으로 나누기
    console.log(username); // abc
    console.log(domain); // naver.com
  }
});
*/

// 이메일 보안
btn.addEventListener("click", () => {
  if (email.value !== "") {
    let username = email.value.split("@")[0];
    let domain = email.value.split("@")[1];

    let half = username.length / 2;
    username = username.slice(0, username.length - half);

    result.innerText = `${username}***@${domain}`;
    email.value = "";
    console.log(username, domain);
  }
});
