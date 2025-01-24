// 콜백지옥 => 콜백함수를 계속 이어서 작성하는 형식

// setTimeout(() => {
//   let coffeeName = "에스프레소"; // 2초 위에 에스프레소
//   console.log(coffeeName);

//   setTimeout(() => {
//     let coffeeName = "카페라뗴";
//     console.log(coffeeName);

//     setTimeout(() => {
//       let coffeeName = "카페모카";
//       console.log(coffeeName);

//       setTimeout(() => {
//         let coffeeName = "아메리카노";
//         console.log(coffeeName);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);
// => 콜백 함수

// 대안 1 쪼개기
// let coffeeName = "";

// const addAmrchno = (name) => {
//   coffeeName += `, ${name}`;
//   console.log(coffeeName);
// };

// const addMocha = (name) => {
//   coffeeName += `, ${name}`;
//   console.log(coffeeName);
//   setTimeout(addAmrchno, 2000, "아메리카노");
// };

// const addLatte = (name) => {
//   coffeeName += `, ${name}`;
//   console.log(coffeeName);
//   setTimeout(addMocha, 2000, "카페모카");
// };

// const addEspress = (name) => {
//   coffeeName += name;
//   console.log(coffeeName);
//   setTimeout(addLatte, 2000, "카페라떼");
// };

// setTimeout(addEspress, 2000, "에스프레소");

// 약속
// 만약에 어떤 데이터를 가져오는데 문제가 없으면 a를 출력
// 그런데 만약 문제가 생겨 에러가 발생하면 b를 출력해줘 라고 약속
// 약속한 실행문을 지켜보고 있다가 나중에 실행

// 1급실행문 함수의 반환값으로 함수가 올 수 있다

// 선언
const addCoffee = (name) => {
  return (prevName) => {
    // 또 다른 매개변수 함수 반환
    return new /* 예약어 */ Promise((resolve) => {
      // js class 통해서 선언한 객체를 가져올떄 new 예약어 사용
      setTimeout(() => {
        let newName = prevName ? prevName + "," + name : name;
        console.log(newName);
        resolve(newName);
      }, 2000); // 2초후에 prevName 있음 주고 없음 name  => 약속
    });
  };
};

// 실행
addCoffee("에스프레소")() // =>고체함수
  .then(addCoffee("카페모카"))
  .then(addCoffee("카페라뗴"))
  .then(addCoffee("아메리카노"));
