const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (!document.body.classList.contains("dark")) {
    btn.innerText = "다크모드로 바꾸기";
    btn.style.backgroundColor = "#000";
    btn.style.color = "#fff";
  } else {
    btn.innerText = "라이트모드로 바꾸기";
    btn.style.background = "#fff";
    btn.style.color = "#000";
  }
});
// btn.addEventListener("click", () => {
//   if (!btn.classList.contains("active")) {
//     btn.classList.add("active");
//     btn.innerText = "다크모드로 바꾸기";
// btn.style.backgroundColor = "#000";
// btn.style.color = "#fff";
//   } else {
//     btn.classList.remove("active");
//     btn.innerText = "라이트모드로 바꾸기";
// btn.style.background = "#fff";
// btn.style.color = "#000";
//   }
// });
