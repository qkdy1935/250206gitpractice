// 인스턴스 객체 & 프로토타입 관계

/* 

1. class 혹은 생성자 함수를 사용해서 객체의 포맷 *(형태)를 구현할 수 있음 

2. class 혹은 생성자 함수를 사용해서 만들어진 포맷을 사용할려면 new 예약어와 함꼐 prototype 객체 *(함수)를 호출하면 가능

3. 이렇게 호출한 prototype 객체의 속성 및 메서드를 상속받은 요소를 instance(인스턴스) 라고 함 

4. 만약 인스턴스 객체의 원조라고 할 수 있는 프로토타입이 무엇인지, 혹은 해당 프로토타입이 가지고 있는 속성 및 메서드함수를 확인해보고자 할 때, 사용할 수 있는 속성 => __proto__

5. 인스턴스 객체의 영향을 준 프로토타입의 조상이 누구인지를 확인해 볼 수 있는 속성
=> prototype(프로토타입)

*/

// 프로토타입 = Book()
// 인스턴스 객체 = book1 (프로트타입으로 통해서 가져옴)

const Book = function (title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;
  // this.finish = function () {
  //   let str = "";
  //   this.done === false ? (str = "읽는 중") : (str = "완독");
  //   return str;
  // };
};
// 외부로 빼서 사용할때
Book.prototype.finish = function () {
  let str = "";
  this.done === false ? (str = "읽는 중") : (str = "완독");
  return str;
};

const book1 = new Book("Typesscript", 648, false);
