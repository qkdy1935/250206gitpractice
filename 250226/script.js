//  배열관련 메서드 함수 및 예제 학습

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index, array) => {
  console.log(number * 2);
}); // 1부터 5까지의 개별값

const newNumbers = numbers.map((number, index, array) => {
  return number * 2 + index;
}); // 하나의 배열로 값 변환

console.log(newNumbers);

// filter : 내가 원하는 조건에 부합하는 다수의 복수릐 값을 새로운 배열로 반환하고 싶을때
// 만약애 부합하는 값이 존재하지 않는 경우? 조건이 충족되지 않는 경우 빈 배열값을 반환
const scores = [90, 35, 64, 88, 45, 92];

const highScores = scores.filter((score) => score >= 85); //[ 90, 88, 92 ]
console.log(highScores);

// find : 내가 원하는 내가 찾고자 하는 값이 나타나는 순간 해당 메서드 함수는 종료를 시킴
//  명확하게 찾고자 하는 값이 단일값인 경우

const names = ["Kim", "Park", "Lee"];
const result = names.find((name) => name === "Park");

console.log(result);

// filter VS find

// 1) filter의 경우 반환값을 배열형태의 자료구조로 가져오는 반면, find의 경우 반환값을 문자열로 변환
//  = 반환값 차이

// 2) filter의 경우 반환값이 존재하지 않는 경우 빈 배열로 반환, find의 경우 undfined로 값을 반환

// 3) filter의 경우 복수의 값을 찾아와서 배열로 반환하는 목적을 가지고 있기 때문에 해당 조건에 부합하는 값들을 모두 찾아옵니다. 반면, find의 경우 명확하게 1개의 단일 값을 찾아오고자 하는 목적을 가지고 있기 떄문에 하나의 값을 찾는 순간 해당 함수의 명령 및 실행은 종료

// reduce()
// 누산기 : 누적계산기

const numbers01 = [1, 2, 3, 4, 5];
const result01 = numbers.reduce((total, current) => total + current, 0);

console.log(result01);
