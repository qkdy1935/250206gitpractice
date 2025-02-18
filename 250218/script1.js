const c = document.querySelector(".chareter");

let degre = 0;

const loop = () => {
  // X,Y 좌표값
  const rota = degre * (Math.PI / 180);
  const togetX = window.innerWidth / 2 - 50 + 100 * Math.cos(rota);
  // const togetX = 100 * Math.cos(rota);
  const togetY = window.innerHeight / 2 - 50 + 100 * Math.sin(rota);

  // 캐릭터에 X,Y값 부여하기
  c.style.left = `${togetX}px`;
  c.style.top = `${togetY}px`;

  degre += 1;

  // 재귀 함수
  requestAnimationFrame(loop);
};
// 브라우저 안에 객체 중앙으로 위치 옮기기
// 브라우저의 전체 너비 innerWidth 나누기 2 = 중앙값 - 객체의 크기 사이즈 반
loop();
