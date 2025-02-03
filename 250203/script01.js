const btn = document.querySelector("#btn");

const showFrice = () => {
  const origin = Number(document.querySelector("#origin-price").value);
  const rate = Number(document.querySelector("#rate").value);
  // console.log(typeof origin, typeof rate); // 속성확인

  const save = origin * (rate / 100);
  const result = origin - save;
  // console.log(result); // 값 확인

  document.querySelector(
    "#result"
  ).innerText = `할인된 금액은 ${result}원 입니다.`;
};
btn.addEventListener("click", showFrice);
