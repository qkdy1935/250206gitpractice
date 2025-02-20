// regExp = regular Expression = 정규표현식
// 문자열 + 정규표현식 + 배열

// 1. 패턴 : 찾고자 하는 문자의 형식을 하나의 정형화된 형태로 정의
// 2. 플러그 : 위에서 정의한 패턴의 값을 찾고자 할 떼, 추가적인 옶션을 적응할 수 있음
// 3. 클래스 : 패턴 내 부가적인 정보를 적용하고 싶을 때, 사용할 수 있는 요소

// decimal
// const regexp = /\d{3}/;  // ===  new RegExp(/\d{3}/); 같은 표현
// console.log(typeof regexp);  //object

// const regexp = new RegExp(/\d{3}/);

// console.log(regexp.test("Hello")); //false
// console.log(regexp.test("123")); //true

// 내장객체 > class 혹은 생성자함수
// new라는 예약어

// const str = "ES2025 is powerfull";
// const patten = /ES2025/;

// console.log(str.match(/ES6/)); // null
// console.log(str.match(patten));
// console.log(str.replace(patten, "love")); // love is powerfull
// console.log(str.match(/ES2025/));
// [ 'ES2025', index: 0, input: 'ES2025 is powerfull', groups: undefined ]

// const str = "Love is Power777!";

// const patten = /love/i; // i는 대소문자를 구분하지 않고 문자열을 찾아옴

// console.log(patten.test(str));

// const patten = /Power{3}/;

// console.log(str.match(patten));
// //[ 'Power7', index: 8, input: 'Love is Power7!', groups: undefined ]
// // /Power\d{3}/; 숫자 여러개 찾을때 {중괄호갯수} === /Power\d\d\d/;

// const hello = "Hello, everyone.com";

// const patten = /^h/i; // ^h로 시작하는지 확인

// const patten2 = /com$/i; // com$로 끝나는지 확인

// console.log(patten.test(hello));
// console.log(patten2.test(hello));

// const hello = "Hello, everyone.";

// console.log(/one.$/.test(hello)); //true
// console.log(/.$/.test(hello)); //true
// console.log(/one$/.test(hello)); //false

// const str = "ES2025";

// console.log(str.match(/[0-9]/)); // [ '2', index: 2, input: 'ES2025', groups: undefined ]
// console.log(str.match(/[0-9]/g)); // [ '2', '0', '2', '5' ] = 배열의 형식
// console.log(str.match(/^[0-9]/g)); // null
// console.log(str.match(/[^0-9]/g)); // [ 'E', 'S' ]
// //  = ^의 위치에 따라 값이 달라짐 [범위]

/*
const str = "Oooooooups";

console.log(str.match(/o/)); // [ 'o', index: 1, input: 'Ooooups', groups: undefined ]
console.log(str.match(/o{3}/)); //[ 'ooo', index: 1, input: 'Ooooups', groups: undefined ] = {중괄호} 반복
console.log(str.match(/o{2,}/i)); // [ 'Ooooooo', index: 0, input: 'Ooooups', groups: undefined ] = 2번 이상 , = 대소문자 구분 없이 i
console.log(str.match(/o{2,4}/i)); //[ 'Oooo', index: 0, input: 'Oooooooups', groups: undefined ] = 대소문자 구분없이 2개이상 4개까지
*/

const number = /^[0-9]+$/; // 숫자만 허용

const postive = /^[1-9]\d+$/; // 양의 정수만 허용 (0 제외)
const nagtive = /^\-[1-9]\d*$/; // 음의 정수만 허용

const engword = /^[a-zA-Z]+$/; // 영어 단어만 허용 (대소문자 구분)
const eng = /^[a-zA-Z0-9]+$/; // 영어 알파벳과 숫자만 허용

const korean = /^[가.힣]*$/; // 한글만 허용 (0개 이상)

const koreanlish = /^[가.힣a-zA-Z]*$/; // 한글과 영어 단어 (대소문자 포함)만 허용 (0개 이상)
