// 마우스를 올릴 떄 마다 뒤에 배경 이미지가 변경

// const lis = document.querySelectorAll("li > a");
// console.log(lis);

// const photo = document.querySelector(".photo");
// console.log(photo);

// lis.forEach((li, index) => {
//   li.addEventListener("click", () => {
//     console.log("click");
//     pfoto
//   });
// });

// "./img/"

const items = document.querySelectorAll("li");
const photo = document.querySelector(".photo");
console.log(photo);

items.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    // console.log("hover");
    const img = this.getAttribute("data-imgs");
    // console.log(img);
    photo.style.backgroundImage = `url("${img}")`;
  });
  item.addEventListener("mouseleave", function () {
    photo.style.backgroundImage = "";
  });
});
