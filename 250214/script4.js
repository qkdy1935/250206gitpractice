// 객체는 최소한 자바스크립트에서 만큼은 최초의 근원이다

const arr = new Array();
console.log();

const bag = {
  type: "backpack",
  color: "blue",
  price: 30000,
};

for (let key in bag) {
  console.log(`${key}: ${bag[key]}`); //key 문자열을 가져올때는 [대괄호]사용
}
