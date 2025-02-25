// 구조분해할당

// const fruits = ["사과", "복숭아"];
// const apple = fruits[0];
// const peach = fruits[1];

// const [apple, peach] = ["사과", "복숭아"];
// const [apple, peach] = fruits;

// console.log(apple, peach);

const seasons = ["봄", "여름", "가을", "겨울"];

const [spring, , fall] = seasons;
console.log(spring, fall);

const char = ["Park", "Lee", "Kim", "Choi"];
const [teacher, ...studebts] = char;

console.log(teacher, studebts);

// 객체의 구조분해할당
const member = {
  name: "David",
  age: 20,
};

// const { name, age } = member;
// console.log(name, age);

// 객체 구조분해할당 주의점 :  변수의 갑이 같아야함
// const { username, age } = member;
// console.log(username, age); //undefined

// 값을 변경하는 방법
// const { name: username, age } = member;
// console.log(username, age);

// 객체의 구조분해할당 - 2
// 중첩분해할당구조
const student = {
  name: "David",
  score: {
    history: 85,
    science: 94,
  },
  friends: ["Kim", "Lee", "Park"],
};

const {
  name,
  score: { history, science },
  friends: { f1, f2, f3 },
} = student;
