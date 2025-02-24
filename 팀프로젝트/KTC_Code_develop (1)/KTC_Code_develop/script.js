/* 헤더 */
const home = document.querySelector("#home");

home.addEventListener("click", () => {
  home.classList.toggle("active");
});

const search = document.querySelector(".search");
search.addEventListener("click", () => {
  search.classList.add("active");
});

/* 이벤트 페이지 */
const endDate = new Date("2025-02-28T23:59:59").getTime();

function countdown() {
  const now = new Date().getTime();
  const timeLeft = endDate - now;

  if (timeLeft <= 0) {
    document.getElementById("countdown").innerHTML = "투표가 종료되었습니다!";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // 각각의 span에 값을 업데이트
  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerText = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerText = seconds
    .toString()
    .padStart(2, "0");
}

const countdownInterval = setInterval(countdown, 1000);

countdown();
