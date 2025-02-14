// 객체종류

/* 
1. 내장객체 : new Date() , Math

2. 브라우저객체 : window

3. 문서객체 : document

4. 사용자정의객체 : 직접 개발자가 원하는 형태 & 기능을 담고 있는 객체의 형태로 정의하는 것을 의미

*/

// 객체는 어떠한 특징 및 원리, 패턴을 가지고 있음
// 객체는 property(속성)로 구성되어있음

// 그렇다면 속성은 어떤형태인가 = 반드시 key와 value의 형태로 띄고 있는 한 쌍이다
// value에 입력되는 값의 형태는 숫자, 문자만 가능한가 XX  // 배열과 함수도 가능

// 객체의 특정 key안에 value값으로 입력된 자료의 형태가 함수인 경우에는 별도의 용어를 사용합니다 = method  = 메서드 = 방법 = > 우리가 그동안 사용했던 querySelector() => 함수

// document.querySelector => document객체의 안에 있는 querySelector
//  => window 최상위 객체 안에 있는 document(property) .querySelector(메서드 함수)

// // 객체를 정의하는 방법
// let obj1 = new Object();
// console.log(obj1);

// // .온점 표기법
// obj1.name = "David";
// console.log(obj1);

// // 대괄호 표기법
// obj1["gender"] = "male";
// console.log(obj1);

// // 객체의 key는 변수의 값처럼 변경이 된다
// // key에 담기는 value는 변경
// obj1.name = "Romeo";
// console.log(obj1);

// // delete예야어를 사용애서 key값 삭제
// delete obj1.name;
// console.log(obj1);

// const student  // 변수
// const student = {} // 객체 (속성 메서드 사용)
const student = {
  name: "Juliet",
  score: {
    // score{} 변수"처럼" 사용가능 (student의 객체) / 객체안의 키는 변수처럼 사용
    history: 85,
    science: 94,
    // average 메서드 함수 = function
    average: function () {
      return (this.history + this.science) / 2; // 익명함수의 this는 메서드 함수를 감싸안고 있는 부모
    },
  },
};
// 온점 표기밥 변수안에 값(key)안에 값을 찾아올수있음
// student.score.history;
console.log(student.score.average()); //  = 함수는(소괄호)사용

// 화살표 함수의 this = 윈도우

const book3 = {
  title: "누구나 처음은 있다",
  page: 350,
  // buy:function //this객체의 사용성을 고려
  buy: function () {
    console.log("이 책을 구입했습니다");
  },
};

// book3.buy();

book3.price = 20000; // value값

console.log(book3);
