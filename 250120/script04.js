// 자바스크립트의 코드가 작성 혹은 생성 => 컴퓨터 메모리 공간 객체 생성 => 실행 컨텍스트 = execurtion context

// execurtion context : 개발자가 현재 작성 혹은 생성 변수(식별자) 가 어떤 것이 있는지, 실행시켜야 하는 함수는 무엇인지 등등의 정보를 저장해놓고 있음!!

// execurtion context => 어떤 코드를 먼저 실행해야 하느가에 대한 우선순위를 결정하기 위한 목적

// 컴퓨터 > 자바스크립트 어떤 곳에서 어떤 방식으로 실행되는지 이해

// 컴퓨터 공간 > stack => 쌓다 // Queue => 대기열
// 엘리베이터 => 스텍구조 <-> 큐(Queue) => 놀이동산
// 10층 먼저 기다리고 있던 사람이 먼저 엘리베이터
// 엘리베이터 뒤쪽 > 가장 나중에 엘리베이터 탑승

// Call Stack : 자바스크립트가 명령문을 처리하는 공간
// VariableEnviroment : 한경변수 // 현재 실행 컨택스트 내 변수명, 함수정보, 실행컨택스트 내 특정함수가 호풀 혹은 실행되는 순간 해당 함수를 스냅샷의 형태로 저장!!

// Snapshot : 일시정지 사진

// Lexical : 사전적인 = "사전"답사

// LexicalEnviromnet : 초기에는 VariableEnviroment와 동일한 값으로 시작하지만, 특정 함수를 호출하면 해당 함수가 실시간 처리를 하고 있는 상태를 바로 반영을 해줌!!

// enviromentRecord : 현재 실해하고자 하는 코드들 내부에 저장디어 있는 정보값을 가지고 있음

// outer-EnviromentReFerence : 현재 실행하고자 하는 코드들이 외부에 영향을 받고 있는지, 받고 있다면 누구의 영향을 받는지를 확인할 수 있는 정보값을 가지고 있음

// ThisBinding : 현재 함수 || 식별자가 가리켜야 하는 대상 객체가 누구인지에 대힌 정보값을 가지고 있음

// let a = 1;
// function outer() {
//   function inner() {
//     console.log(a);
//     a = 3;
//   }
//   inner();
//   console.log(a);
// }

// outer();
// console.log(a);

// 호이스티  = 우물 = 무언가를 끌어올리다
// function a() {
//   let x;
//   x;

//   x = 1;
//   console.log(x);
//   console.log(x);
//   x = 2;
//   console.log(x);
// }

// a();
// function a() {
//   let x = 1;
//   console.log(x);
//   x;
//   console.log(x);
//   x = 2;
//   console.log(x);
// }

// a();

// function a() {
//   let b;
//   b = function b() {};

//   console.log(b);
//   b = "bbb";

//   console.log(b);
//   // function b() {}

//   console.log(b);
// }

// a();
