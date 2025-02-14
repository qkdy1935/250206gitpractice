// 사용자정의 객체 생성

const newBook = {
  title: "Javascript",
  page: 360,
  price: 32000,
  author: "박세진",
  published: "2525-04-22",
  qustion: function () {
    console.log(`${this.author}님의 따끈한 신간 도서입니다`);
  },
};

newBook.qustion();

// 반복적인 코드 : 객체 생성자 함수
// 생성자 함수의 시작은 대문자사용 (바꿔야 하는 값/매개변수) {this(객체).(안에)}

function Book(title, page, price, author, published) {
  this.title = title;
  //이 생성자 함수는 클래스 선언으로 변환될 수 있습니다.ts(80002)
  // function Book(title: any, page: any, price: any, author: any, published: any, qustion: any): void
  this.page = page;
  this.price = price;
  this.author = author;
  this.published = published;
  this.qustion = function () {
    // 매서드 함수
    console.log(`${this.author}님의 따끈한 신간 도서입니다`);
  };
}

// 생성자 함수를 만들고 나서 생성자함수를 사용하고자 할 떄에는 반드시 new 사용

const book1 = new Book("java", 360, 32000, "김윤주", "2025-05-15");
book1.qustion();
