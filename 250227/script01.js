// 중복되는 값을 허용할것인가 허용하지 않을것인가
// Map() => 값을 추가하고자 할 때, Set()
// Map => 객체와 장점만 추출을 해왔음
// Set => 배열처럼 단일 값으로만 내부 요소를 정의한다

const numSet1 = new Set();

numSet1.add("one").add("two").add("three");

// has = 존재하는 값 확인
console.log(numSet1.has("four")); // false
console.log(numSet1.has("three")); // true

console.log(numSet1.keys()); // values 동일
console.log(numSet1.values()); // keys 동일
console.log(numSet1.entries()); // values와 keys 값 동일

// delete = 특정 값 제거
numSet1.delete("three");

// clear = 모든 값 삭제
numSet1.clear();
