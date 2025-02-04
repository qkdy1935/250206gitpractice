/* EVENT */

// window.onload = alert("안녕하세요");

// const but = document.querySelector("button");
// console.log(but);

// but.onclick = function () {
//   document.body.style.backgroundColor = "green";
// };

// but.addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });

document.body.addEventListener("keydown", (event) => {
  document.querySelector(
    "#result"
  ).innerText = `code : ${event.code}, key : ${event.key}`;
});
