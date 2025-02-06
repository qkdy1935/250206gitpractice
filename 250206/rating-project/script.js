// 별점 만들기
// 별을 누르면 색이 바뀜, 뒤에 있는 별을 누르면 누른 별의 인덱스 값보다 작은 별들도 같이 색이 바뀌게
// 별의 개수에 따라 글자바뀌게

const stars = document.querySelectorAll(".fa-star");
// console.log(stars);
const print = document.querySelector(".print");
// console.log(print);

// 반복문
stars.forEach((star, index) => {
  /* 최초선택 */
  star.addEventListener("click", () => {
    // console.log("click");
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });

    // 값 변경
    let mesg = "";
    let img = "";

    switch (index) {
      case 0:
        mesg = "별로입니다!";
        img = "./img/star-lv1.png";
        break;
      case 1:
        mesg = "보통이에요!";
        img = "./img/star-lv2.png";
        break;
      case 2:
        mesg = "그냥그래요!";
        img = "./img/star-lv3.png";
        break;
      case 3:
        mesg = "맘에들어요!";
        img = "./img/star-lv4.png";
        break;
      case 4:
        mesg = "아주좋아요!";
        img = "./img/star-lv5.png";
        break;
    }

    print.innerHTML = `<img src="${img}">${mesg}`;
  });
});
