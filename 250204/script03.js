const open = document.querySelector("#open");
const close = document.querySelector("#close");
const box = document.querySelector("#modal-box");

open.addEventListener("click", function () {
  this.classList.add("btnactive");
  box.classList.add("active");
});

close.addEventListener("click", function () {
  open.classList.remove("btnactive");
  box.classList.remove("active");
});
