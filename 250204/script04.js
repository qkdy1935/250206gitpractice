const box = document.querySelector("#box");
box.addEventListener("click", (e) => {
  alert(`이벤트 발생위치 : ${e.pageX} ,${e.pageY} `); // 이벤트 위치 값
});
