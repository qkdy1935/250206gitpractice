// 문자열
// str.charAt(0) == str[3]

/*
const str = "hello";

//문자열은 유사배열이다
console.log(str.length);  // 5
*/
/*
const str = "Good Morning!";

// console.log(str.length);
// charAt() = 특정문자열의 위치를 파악하고 싳을때
console.log(str.charAt(0)); // 인덱스 위치에 있는 문자 찾기
console.log(str[3]); // 문자열을 배열로 인덱스 위치 찾기
*/

const string = prompt("문자열을 입력하세요!");
const leter = prompt("어떤 문자를 체크하겠습니까?");

const counting = (string, leter) => {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[0] === leter) count += 1;
  }
  return count;
};

const result = counting(string, leter);
document.write(`${string}에는 ${leter}가 ${result} 있습니다`);
