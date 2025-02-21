// // 1) 배열을 생성하는 방법
// const sesson = [];
// sesson[0] = "spsing";
// sesson[1] = "spsing";

// console.log(sesson);

// // 2) 배열을 생성하는 방법
// const pets = ["dog", "cat", "mouse"];

// // 3) 배열을 생성하는 방법
// const frults = new Array("사과", "복숭아", "포도");

// // 배열의 아이템에 접근 후 값 변경
// pets[2] = "hamster";
// console.log(pets);

// // 일반for문  for : 배열의 전유물 배열 = 인터러블한 갹채
// const colors = ["red", "green", "blue", "white", "black"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// forEach
// 콜백함수 내 인자값이 1~3개까지 입력
// forEach((1개)=>{}) 1개 : 배열의 개별아이템
//  2개 : 개별아이템 , 인덱스
//  3개 : 개별아이템 , 인덱스 , 배열 그 자체

// const animls = ["lion", "bear", "bird"];

// animls.forEach((animl) => {
//   console.log(animl);
// });
// animls.forEach((animl, index) => {
//   console.log(`animls${index} : ${animl}`);
// });
// animls.forEach((animl, index, Array) => {
//   console.log(`[${Array}] [${index}] : ${animl}`);
// });

// 배열이 가지고 았는 주요 메서즈 함수 시리즈

//  1. concat() : 서로 다른 배열 혹은 유사배열을 하나의 배열로 합치고자 할 떄 사용할 수 있는 메서드 함수

// const vegetable = ["양상추", "토마토", "피클"];
// const meat = ["불고기"];

// let meatBurger;

// meatBurger = vegetable.concat(meat, "빵"); // 추가하고자 하는 값도 배열로 추가 가능
// // meatBurger = vegetable.concat(meat); // 하나의 배열 안에 합쳐짐
// // meatBurger = meat.concat(vegetable); // 순서에따라 달라짐
// // meatBurger = { vegetable, meat }; //독립적인 배열 2개

// // 전개연산자 구문을 통해서도 배열을 합칠수 았음
// // meatBurger = [...vegetable, ...meat];
// meatBurger = [...vegetable, ...meat, "빵"];

// console.log(meatBurger);

// 2. reverse() ; 현재 배열 내의 아이템 순서를 역순으로 배치하고자 할 떄 사용할 숭 있는 메서드 함수

// const numbers = [6, 9, 3, 21, 20];

// console.log(numbers);
// console.log(numbers.reverse());

// // 3. sort() : 베열 안에 있는 아이템들의 값을 정렬하고자 할 떄 사용할 수 있는 메서드 함수
// // 기본적으로 작은 값부터 큰 값으로 정렬하는 오름차순의 형태를 띄고 있다
// // a-z // 1-9

// const week = ["sun", "mon", "tve"];
// console.log(week.sort());

// const values = [5, 20, 3, 11, 4, 15];
// // console.log(values.sort()); // 값 [ 11, 15, 20, 3, 4, 5 ]
// console.log(
//   values.sort((a, b) => {
//     // if (a > b) return 1;
//     // if (a < b) return -1;
//     // if (a === b) return 0;
//     return a - b; // 오름차순 문법
//   })
// ); // [ 3, 4, 5, 11, 15, 20 ]

// console.log(
//   values.sort((a, b) => {
//     return b - a; // 내림차순 문법
//   })
// ); // [ 20, 15, 11, 5, 4, 3 ]

// 4. pop(), push() : 배열 안에 맨 뒤쪽부터 값을 제거하거나 혹은 추가하고자 할 떄 사용가능한 메서드 함수

const aninls = ["lion", "bear", "bird"];
console.log(aninls);
aninls.pop();
console.log(aninls);
aninls.push("tiger");
console.log(aninls);
// 배열의 맨 뒤에 값 제거후 추가 => 교체

// 5. shift(), unshift() : 배열 안에 맨 앞쪽부터 값을 제거하거나 혹은 추가하고자 할 떄 사용가능한 메서드 함수

aninls.shift();
console.log(aninls);
aninls.unshift("dog");
console.log(aninls);
// 배열의 맨 앞에 값 제거 후 추가 => 교체

// 배열은 인덱스 값(순서)을 가지고 있기 때문에

// 6. splice() : 배열의 특정 위치에 있는 아이템 값을 추가하거나 제거하고자 할 떄 사용가능한 메서드 함수
// splice(위치, 개수)

const subjects = ["html", "css", "js", "ts", "react"];

console.log(subjects.splice(2));
console.log(subjects.splice(2, 2)); // 해당 위치부터 몇개를 자를것인지 결정
console.log(subjects.slice(2, 2)); 

// splice = 원본배열의 값 변경
// slice = 원본배열의 값 유지
// 7. slice()
