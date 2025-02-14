function Book(title, price) {
  this.title = title;
  this.price = price;
}

book1.prototype.buy = function () {
  console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
};

const book1 = new Book("java", 1000);
book1.buy();

function TextBook(title, price, major) {
  // 다른 생성자함수에 있는 값을 들고와서 사용하고자 할 때 *(Book상속)
  Book.call(this, title, price); // book의 this값까지 같이 상속
  this.major = major;
}

TextBook.prototype.buyTextBook = function () {
  console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다.`);
};

// 생산자에서 상속을 주고 받을때 꼭 해야하는 코드
// 상속을 누가 누구에게 주는 알려줘야 함
// 1. 상속받는 애 먼저 2. 상속 주는 애 뒤에
Object.setPrototypeOf(TextBook.prototype, Book.prototype);

const book2 = new TextBook("컴퓨터공학", 5000, "알고리즘");

console.log(book2);

book2.buyTextBook();
