/* button Event */

const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukebox = document.querySelector("#menuJukebox");
// console.log(menuHome, menuGame, menuJukebox);

/* iframe */
const contentFrame = document.querySelector("#contentFrame");

/* iframe 교체 */
const homeChage = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "background: #fff; color:#55b2e4";
  menuGame.style = "background: #55b2e4; color:#fff";
  menuJukebox.style = "background: #55b2e4; color:#fff";
};

const gameChage = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuHome.style = "background: #55b2e4; color:#fff";
  menuGame.style = "background: #fff; color:#55b2e4";
  menuJukebox.style = "background: #55b2e4; color:#fff";
};

const jukeboxChang = () => {
  contentFrame.setAttribute("src", "./jukebox.html");
  menuHome.style = "background: #55b2e4; color:#fff";
  menuGame.style = "background: #55b2e4; color:#fff";
  menuJukebox.style = "background: #fff; color:#55b2e4";
};

menuHome.addEventListener("click", homeChage);
menuGame.addEventListener("click", gameChage);
menuJukebox.addEventListener("click", jukeboxChang);

/* count Event */

/* 
쿠키는 기본적으로 날짜 정보 데이터 필요

서버 => 클라이언트에게 쿠키를 전달한 이후, 해당 쿠키가 천년 만년 계속 유지 X
 */

const getFormattolDate = () => {
  const date = new Date();
  // console.log(date);
  const year = date.getFullYear();
  // console.log(year);
  // const day = date.getDate();
  const day = "0" + date.getDate();
  // console.log(day);
  // const month = date.getMonth() + 1;
  const month = "0" + (date.getMonth() + 1);
  // console.log(month);
  return `${year}-${month}-${day}`;
};

const todayDate = getFormattolDate();
const dallyCookieName = `pageHit_${todayDate}`;

const expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 1);
const expireDateString = expireDate.toGMTString();

const cookieVal = (cookieName) => {
  const thisCookie = document.cookie.split("; ");
  for (let i = 0; i < thisCookie.length; i++) {
    if (cookieName === thisCookie[i].split("=")[0]) {
      return thisCookie[i].split("=")[1];
    }
  }
  return 0;
};

// 하루 방문자 체크
let dailyHitCt = parseInt(cookieVal(dallyCookieName));
if (isNaN(dailyHitCt)) {
  dailyHitCt = 0;
}
dailyHitCt++;
document.cookie = `${dallyCookieName}=${dailyHitCt}; expires=${expireDateString}`;

//  누적 방문자
let totalHitCt = parseInt(cookieVal("totalPageHit"));
if (isNaN(totalHitCt)) {
  totalHitCt = 0;
}
totalHitCt++;
document.cookie = `totalPageHit=${totalHitCt}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
/*
쿠키값은 어떻게 생겼을까?

"쿠키네임 = 쿠키값; expires=만료날짜"
"pageHit_2025-02-07=5; expires=025-02-08"
*/

document.querySelector(".zero").innerText = dailyHitCt;
document.querySelector(".total").innerText = totalHitCt;
