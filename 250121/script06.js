// 우리가 현재 공부하고 있는 js를 객체지향 언어 => C || Java => 객체지향 언어 =>  어떠한 함수가 시작되고, 처리해야할 자료가 발생되면 기본저긍로 객체라는 지료구조의 형태로 변환해서 관리 저장 보관한다

// 이러한 객체지향 언어들은 거의 대부분 this 객체를 가지고 있음 => 어떤 함술 혹은 속성값이 실행되었을 댸 실행된 함구 및 속성의 주인이 누구인지를 효율적으로 가리켜서 쉽게 찾아볼수 있게 해주는 역할

/*
1. js를 활용해서 함수 선언 => 호출하는 순간 => "실행 컨테스트"실핼
2."실행 컨테스트" => Call stack 공간에서 가장 먼저 실행
3. 그 다음 호출된 함수가 그 위로 쌓이게 되는 구조
4. "실행 콘테스트" => 어떠한 정보로 구성되었는가?
5.
  VariableEnviroment (*환경변수)
    -  : 해당함수가 가지고 있는 내부 함수 || 변수 등등 정보
    -  : 핻당 함구가 참조하고 있는 매개변수 || 인지값이 외부에서 들어온 경우 어느 경로에서 유입되었는지에 대한 전반적인 정보

  LexicalEnviroment (*사전환경정보)
    -  : 해당 함수가 가지고 있는 내부 함수 || 변수 등등 정보
    -  : 해당 함수가 참조하고 있는 매개변수 || 인지값이 외부에서 들어온 경우

  ThisBinding(가리켜야 할 대상 누구인지의 정보)

*/

/* Scope (*스코프) = 유효범위
- 함수가 어디에서 어디까지를 커버해야하는지를 결정

Scope Chain (*스코프체인) = 
- 스코프 범위 내 요소를 하나씩 차례대로 검색해나가는 프로세스
- 현재 호출됨 함수의 과거 선언 당시의 LexicalEnviroment의 정보까지 참조
*/

/* 그래서 this를 어떻게 식별해야하는가? */
/*
1. JS내 전역 공간에서 this는 무조건 전역(*모든 것을 커버)개체
> JS > 어디에서 사용하려고 만들어진 => 웹브라우저
> Node.js > global 
*/

// 전역에서 사용 가능한 변수 => 전역 객체 안애 하나의 속성값

// const obj = {
//   a: 1,
// };

// obj.a;

// 선엄
// const func = function (x) {
//   console.log(this, x);
// };
// // 호출
// func(1);

// const obj = {
//   method: func,
// };

// obj.method(2);

// 함수를 독립적으로 실핼시킬 때에는 this는 전역개체인 window를 가르킨다

// 함수가 특정 개체의 속성 메서드로 실행될 떄에는 해당 객체를 가르킨다.

// 1. this를 호출하는 상황이 전역요소인지  => 전역개체

// 2. 함수를 족립적으로 호출한 상황에서 this를 요청 => window

// 3. 특정 객체안에서 속성 중 메서드를 활용해서 this를 요청 =>해당 객체

// const obj = {
//   method: function (x) {
//     console.log(this, x);
//   },
// };

// obj.method(1);
// obj["method"](2);

// const obj = {
//   methodA: function () {
//     console.log(this);
//   },
//   inner: {
//     methodB: function () {
//       console.log(this);
//     },
//   },
// };

// obj.methodA();
// obj["methodA"]();

// obj.inner.methodA();
// obj.inner["methodA"]();
// obj["inner"]["methodB"]();
// obj["inner"].methodB();

// 메서드 = method = 객체 아넹 잇는 함수

// const obj1 = {
//   outer: function () {
//     console.log(this);
//     const innerFunc = function () {
//       console.log(this);
//     };
//     innerFunc();

//     const obj2 = {
//       innerMethod: innerFunc,
//     };
//     obj2.innerMethod();
//   },
// };

// obj1.outer();

// 객체안에 메서드 객페 할당
// 단독 : 윈도우 = 글로벌
// 화살표 함수에서의 this객체는
// ES6 => 2515년
// 화살표 함수 => 기존 함수들의 실행컨테스트와 한가지 엄청나게 큰 변화
// 실행컨테스트의 객체를 => thisBinding이 없음 X
// 화살표 함수는 상위 스코프의 this를 상속
// 콜백 함수를 사용하여
// 화살표 함수의 this는 부모요소의 this 값을 그대로 상속
// 화살표 함수는 콜백 함수에서 자주 사용

// const obj = {
//   outer: function () {
//     console.log(this);
//     const innerFunc = () => {
//       console.log(this);
//     };
//   },
// };

// obj.outer();

// const arr = [1, 2, 3, 4];

// arr.forEach(function (num) {
//   console.log(this, num);
// });
// => this => arr => 전역

// setTimeout(function () {
//   console.log(this);
// }, 300);

// node : Comon JS ESM

// document.body.innerHTML += "<button id='a'>클릭</button>";
// document.body.querySelector("#a").addEventListener("click", function () {
//   console.log(this);
// });

const obj1 = {
  outer: function () {
    console.log(this);
    const innerFunc1 = function () {
      console.log(this);
    };
    innerFunc1();

    const self = this;
    const innerFunc2 = function () {
      console.log(self);
    };
    innerFunc2();
  },
};

obj1.outer();
