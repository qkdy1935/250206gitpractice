const form = document.querySelector(".word-text > form");

const gameStart = (e) => {
  e.preventDefault();
  const word = document.querySelector("#word").innerText;
  const myword = document.querySelector("#myword").value;
  console.log(word, myword);

  const lastword = word[word.length - 1];
  const firstword = myword[0];

  if (lastword === firstword) {
    document.querySelector("#result").innerText = "성공!";
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "틀림";
    document.querySelector("#myword").value = "";
  }
};

form.addEventListener("submit", gameStart);

// lotto

const lottobut = document.querySelector(".lotto-btn");
const num = document.querySelector(".game-lotton-number");

/* 구조분해할당 */
const leckynum = {
  digitCount: 6,
  maxNumder: 45,
};

const startlotto = () => {
  // const digitCount = 6;
  // const maxNumder = 45;

  /* 구조분해할당 */
  const { digitCount, maxNumder } = leckynum;

  let mynum = new Set();

  for (let i = 0; i < digitCount; i++) {
    mynum.add(Math.floor(Math.random() * maxNumder) + 1);
  }

  if (mynum.size === 6) {
    // document.querySelector(".game-lotton-number").innerText = `${[...mynum]}`;
    num.innerText = `${[...mynum]}`;
  } else {
    num.innerText = "재추첨";
  }
};

lottobut.addEventListener("click", startlotto);
