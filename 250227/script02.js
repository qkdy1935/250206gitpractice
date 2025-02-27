const member1 = ["HTML", "CSS"];
const member2 = ["CSS", "JAVASCRIPT", "REACT"];
const member3 = ["JAVASCRIPT", "TYPESCRIPT"];

// 전개연산자(...) 구문을 사용해서 하나의 배열로 합침
const subjects = [...member1, ...member2, ...member3];

// Set 중복되는 값 제거
const resultList = new Set();

subjects.forEach((subject) => {
  resultList.add(subject);
});

const result = document.querySelector("#result");

// map() 새로운 배열로 반환
result.innerHTML = `
<ul>
  ${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
</ul>
`;
