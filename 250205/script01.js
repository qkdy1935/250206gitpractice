const order = document.querySelector("#order");
const orderinfo = document.querySelector("#orderinfo");

order.addEventListener("click", () => {
  const newH = document.createElement("h2");
  const title = document.querySelector(".desc > h2");
  const textNode = document.createTextNode(title.innerText);

  newH.style.fontSize = "2rem";
  newH.style.color = "green";

  const newImg = document.createElement("img");
  const srcNode = document.createAttribute("src");

  srcNode.value =
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b24c79dc-427b-4722-9e0c-2ca66c064ecf/G.T.+HUSTLE+3+EP+OLY.png";

  newImg.setAttributeNode(srcNode);

  newH.appendChild(textNode);
  orderinfo.appendChild(newH);
  orderinfo.appendChild(newImg);
});

const tit = document.querySelector("#title");

tit.addEventListener("click", function () {
  this.parentNode.removeChild(this);
  // console.log(this.parentNode);
  // this.removeChild(this);
  // this.remove(); // 본인 삭제
});
