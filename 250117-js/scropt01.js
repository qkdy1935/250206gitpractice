// 1) 원시타입 = Primitive type

// - number type = 숫자
// - string = 문자열
// - boolean =논리형
// truthy한 값

//   > Template Literal => 변수와 문자열을 동시에 사용하고자 할 때, 굳이 번거롭게 연산자를 사용하지 않을 수 있도록 만들어 놓은 문법
// - undefined = 미정
//   > falsy한 값 => 정해지지 않은 값 , 언제가는 들어갈 값

// - null = 유효하지 않은 값 "유효하지 않다"라는 값을 가지고 있음
//   > 아예 값을 주지 않은 것을 정의하고자 할 떄

// - symbol = 유일무이한 깂
//   > 복수의 값을 정의할때

const num = 7;
const str = "7";
const bool = true;
const bool02 = false;

// const age = prompt("당신은 나이를 입력하세요");
// console.log(age);
// console.log(typeof age);

console.log(typeof bool);
console.log(typeof bool02);

const userName = "현빈";
const movieTatle = "하얼빈";

// const reult = userName + " 배우가 출연한 최근 영화는 " + movieTatle + " 입니다. ";
const reult = `${userName} 배우가 출연한 최근 영화는 ${movieTatle} 입니다.`;
console.log(reult);

let hobby;
console.log(hobby);

let weekwnd = null;
console.log(weekwnd);

const only01 = Symbol();
const only02 = Symbol();

console.log(only01 === only02);

let id = Symbol();

const member365 = {
  name: "jack",
  [id]: "ezen",
};

console.log(member365);

// 2) 참조타입 = Reference type

//  - array = 배열 (객체자식)
//  - object = 객체
//  - function = 함수

//  - regexp = 정규표현식
//  - Map = 멥데이터 (이터너블한 데이터 안에 동일한 값이 중복되는 걸 배제 불가
//  - Set = 셋데이터
// 1~45겹쳐진 값이 또 나오면 안될떄 사용 ( 동일한 값이 나오지 않게 할 떄)

// 배열
const arr = [1, 2, 3];
const strArr = ["park", "kim", "lee"];
const boolArr = [true, false];

arr[3] = 7;

console.log(arr);
console.log(strArr);
// 변수와 문자같이 사용
console.log(`${arr[2]}은 'arr배열의 ${arr[2]}번쨰 값입니다.`);
console.log(`${arr[3]}은 'arr배열의 ${arr.length}번쨰 값입니다.`);
console.log(`${arr[3]}은 'arr배열의 ${arr.length}번쨰 값입니다.`);
console.log(`${strArr[3]}은 'arr배열의 ${strArr[3]}번쨰 값입니다.`);
console.log(
  `${strArr[1]}은 'arr배열의 ${strArr.indexOf(strArr[1]) + 1}번쨰 값입니다.`
);
console.log(
  `${strArr[1]}은 'arr배열의 ${strArr.indexOf(strArr[1])}번쨰 값입니다.`
);
console.log(`${strArr[1]}은 'arr배열의 ${strArr.length}번쨰 값입니다.`);
arr.indexOf;
console.log(typeof arr);

// 객체
const obj = {
  fristNumber: 1,
  secoondNumber: 2,
  finalNumber: 3,
};

const frontendClass = {
  tutor: "Da",
  students: 16,
  major: "language",
};

// 값을 찾아오는 2가지 방법

// 온점표기법
console.log(frontendClass.tutor);

// 대괄호표기법
console.log(frontendClass["students"]);

frontendClass.attitude = "the best";

console.log(frontendClass);

// 함수 = 기능

// 원래 초창기에 JS함수 구현

// 선언 & 호출

// -선언-
function hello() {
  alert("Hello World!");
}

console.log(hello);

// -호출-
hello();

function hello() {
  console.log("Hello World!");
}

console.log(typeof hello);
