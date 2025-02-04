document.querySelector("#id").addEventListener("focus", function () {
  this.style.backgroundColor = "pink";
});

document.querySelector("#id").addEventListener("blur", function () {
  this.style.backgroundColor = "transparent";
});

document.querySelector("#pw").addEventListener("focus", function () {
  this.style.backgroundColor = "green";
});

document.querySelector("#pw").addEventListener("blur", function () {
  this.style.backgroundColor = "transparent";
});
