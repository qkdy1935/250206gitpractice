// 변수 자료형 연산자 조건문 반복문 함수 Dom 이벤트 객체 class 문자열 정규표현식 배열 Map/Set

// Map()
// 클래스 혹은 생성자 함수 => 프로토타입 객체
// 왜 만들었을까?
// 주요 자료구조 : 객체 & 배열
// 객체 : 키 & 값 한쌍 프로퍼티 구성
// 반복적인 무언가를 실행할 수 없음
// 객체안에 있는 해당 속성들을 인덱스화 할 수 없음

// 배열 : 이터러블함 => 반복적인 무언가를 실행 할 수 있음
// 배열안에 있는 요소들은 각각 인덱스화 할 수 있름

// ES6 > 객체 & 배열 장점만 추출해서 자료구조

// Set() : 하나의 구조 안에 동일한 값을 넣지 않음
//  = map() 과 달리 중복되는 값을 허용하지 않는다
// set(key: any, value: any): Map<any, any>

const bag = new Map();
// bag.set("color", "red");
// bag.set("price", "30000");

// 메서드 체이닝 기법
bag.set("color", "red").set("price", "30000");
// bag.get("color") 값울 찾아올때 // bag.has("color") : 존재하는 값을 찾을때
bag.delete("color"); // 원하는 키값을 특정해서 지울때 사용
bag.clear(); // 맵이라는 자료구조를 다 삭제할때 사용

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

// entries, keys, values
// console.log(myCup.keys());
const myCupIte = myCup.keys();
console.log(myCupIte);

const myCupIte02 = myCup.values();
console.log(myCupIte02);

const myCupIte03 = myCup.entries();
console.log(myCupIte03);

myCupIte03.forEach((item) => {
  console.log(item, typeof item);
}); // 객체지만 배열의 형태로 변환

myCupIte.forEach((item) => {
  console.log(item, typeof item);
}); // 객체의 형태지만 배열에서 사용하는 forEach 사용가능 문자열로 변환

// Iterable : 반복 순회할 수 있는 (*형용사)
// Iterator : Iterable한 객체가 된 요소 (*명사)
