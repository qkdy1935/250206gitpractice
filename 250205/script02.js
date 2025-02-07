// const save = document.querySelector(".btn[type='submit']");
// const tit = document.querySelector("#title");
// const aut = document.querySelector("author");
// const list = document.querySelector("#booklist");

// save.addEventListener("click", (e) => {
//   e, preventDefault();
// });

const form = document.querySelector("form");
const tit = document.querySelector("#title");
const aut = document.querySelector("#author");
const list = document.querySelector("#booklist");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (tit.value === "" || aut.value === "") alert("정보흫 입려해주세요");
  else {
    const item = document.createElement("li");
    item.innerHTML = `${tit.value}-${aut.value}<span>삭제</span>`;

    list.appendChild(item);

    tit.value = "";
    aut.value = "";

    const delItbuts = document.querySelectorAll("span");
    delItbuts.forEach((delItbut) => {
      delItbut.addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
      });
    });
  }
});
