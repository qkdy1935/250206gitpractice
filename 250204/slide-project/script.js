const videos = ["mv-1.mp4", "mv-2.mp4", "mv-3.mp4"];

const container = document.querySelector("#container");

const newVideo = document.createElement("video"); // 태그 = Element
const src = document.createAttribute("src");
const auto = document.createAttribute("autoplay");
const arrows = document.querySelectorAll(".arrow"); // 유사배열 length 값 사용가능

src.value = `./videos/${videos[0]}`;

newVideo.setAttributeNode(src);
newVideo.setAttributeNode(auto);
container.appendChild(newVideo);

newVideo.addEventListener("click", function () {
  if (this.paused) this.play();
  else this.pause();
});

let i = 0;
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = videos.length - 1;
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= videos.length) {
        i = 0;
      }
    }
    src.value = `./videos/${videos[i]}`;
  });
});
// const width = document.createAttribute("width"); // 속성 = Attribute
// const height = document.createAttribute("height"); // 속성 = Attribute

// width.value = "700";
// height.value = "400";

// newVideo.setAttributeNode(height);
// newVideo.setAttributeNode(width); => JS도 가능하지만 CSS에서 코드 줄이 더 짧음
