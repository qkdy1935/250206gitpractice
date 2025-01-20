//  변수

// 자료형

//  자동 형변환
// 문자 + 숫자 = 문자
// const one = "20";
// const two = 25;
// // const result = one + two;
// // 문자 - 숫자 = 숫자
// const result = one - two;
// console.log(typeof result);

//  수동 형변환
// 숫자로의 형변환 : Number // parseInt / parseFloat
// const str = Number("20");
// console.log(typeof str);

// const str = parseInt("20");
// console.log(typeof str);

const str = parseFloat("20");
console.log(typeof str);

const num99 = "17.8";

console.log(Number(num99));
// => 결과값 17.8

console.log(Number(true));
// => 결과값 1 = 무언가의 값을 숫자로 바꿈

console.log(parseInt(true));
// => 결과값 NaN = Not a Number(숫자가 아니다)

console.log(parseInt(num99));
// => 결과값 17 = 소수점 날림 (정수)

console.log(parseFloat(num99));
// => 결과값 17.8 = 소수점 살림(소수점 필요할 때 사용)

// 문자로의 형변환 : toString // String

const num77 = 77;
console.log(typeof num77.toString());
// => String (문자열)

// null & undefined => 문자열
console.log(typeof String(num77));
// => String (문자열)

// 논리형(boolean) 으로 형변환 : true // false

console.log(Boolean("Hello!"));
console.log(Boolean(undefined));
