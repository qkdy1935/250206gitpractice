// 사용자가 스크롤을 내렸을떄 header안에 배경컬러 // banner height를 변경 -> 가상클래스 적용

// 사용자가  지금 스크롤을 내렸어
// > 스크롤은 브라우저가 가지고 있는 요소
// "브라우저야 지금 스크롤이 내려갔니?""

// header는 html안에서 header라는 태그를 사용하고 있는 요소

// 사용자가 스크롤을 내렸으니까 빨리 artive 클래스를 header에게 적용시켜

// 브라우저가 가지고 있는 내장객체

/* scroll event */
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }
});

/* slick slide r*/
$(document).ready(function () {
  $(".myslider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    Infinity: false,
    dots: true,
    speed: 300,
  });
});
