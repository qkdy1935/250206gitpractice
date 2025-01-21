// 사용자에게 교통비와 식비와 음료비 이상 3개의 값을 전달받아서
// 3개의 총합이 적정 지출 비용을 초과하는 경우 "00원 초과, 지출을 줄여주세요" , 만약 적정지출비용을 초과히지 않은 경우 "00원 유지, 축하드립니다!" 메세지가 콘솔창에 출력

// 적정지출비용 10000원

// const car = prompt("교통비를 입력하세요");
// const food = prompt("식비를 입력하세요");
// const cafe = prompt("음료비를 입력하세요");

// const all = car + food + cafe;
// let money = 10000 - all;

// money <= all`${all}`;

// console.log(money);

let car, food, cafe;

car = parseInt(prompt("교통비를 입력하세요"));
food = parseInt(prompt("식비를 입력하세요"));
cafe = parseInt(prompt("음료비를 입력하세요"));

let total = car + food + cafe;
let result = total < 10000;

const plus = total - 10000;
const minus = 10000 - total;

result = result
  ? `${minus}원 남았습니다. 돈 관리 잘했어요!`
  : `${plus}원 초과했습니다. 돈 관리 잘해주세요!`;

console.log(result);
