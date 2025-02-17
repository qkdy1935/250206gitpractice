/*
const str = " ab cd ef ";
console.log(str);
console.log(str.trim()); // 앞 뒤 불필요한 (여백)공백 제거
// trim() = 특정 문자열의 앞 뒤 여백을 없애고자 할 떄 사용
console.log(str.trimStart()); // 앞쪽에 불필요한 (여백)공백 제거
// trimStart() = 특정 문자열의 앞 여백을 없애고자 할 때 사용
console.log(str.trimEnd()); // 뒤쪽에 불필요한 (여백)공백 제거
// trimEnd() = 특정 문자열의 뒤 여백을 없애고자 할 때 사용
*/

/*
let str = "Good Morning";
console.log(str.toUpperCase()); // 전체 대문자
console.log(str.toLowerCase()); // 전체 소문자
*/

/*
let str = "Good Morning";

console.log(str.substring(5)); // 5번쨰 인덱스 값부터의 값을 찾아옴 앞부분은 나오지 않음

console.log(str.substring(0, 4)); // 해당 문자만 추출하고 싶을때 (시작하는 인덱스값, 마지막 인덱스 값 보다 바로 앞까지(0~3까찌의 문자를 찾아옴)
// = 첫번쨰 인댁스값으로 음수를 받개되는 경우 무조건 0으로 인식
*/

/*
let str = "Good Morning";

console.log(str.slice(0, 4)); // substring과 서로 기능 비슷
console.log(str.slice(-5, 12)); // substring과 서로 기능 비슷
// = 슬라이스는 첫번쨰 인댁스값으로 음수를 받개되는 경우 오른쪽부터 왼쪽으로 -1 , -2 음수값으로 가능
*/

// 문자열을 배열로 바꾸는 메서드함수
// split(구분자) => 특정 문자열에서 해당 구분자를 기준으로 각각 아이템을 구성해서 새로운 배열로 만들어주는 메서드 함수

let str = "Good Morning"; // ["good" , "morning"] 배열로 변경
const arr = str.split(" "); // 공백을 기준으로 문자를 쪼개서 배열을 만듬
console.log(arr); // ""(문자) , " "(공백)
