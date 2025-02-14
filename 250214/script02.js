// Class = 2015년 이후
// Class는 반복적인 코드를 사용하기 위한 사용
// class 이름 {중괄호사용}
// constructor = 생성자 함수

class Book {
  constructor(title, page, price, author, published) {
    this.title = title;
    this.page = page;
    this.price = price;
    this.author = author;
    this.published = published;
  }
  // 메서드 함수 선언문
  qustion() {
    console.log(`${this.author}님의 따끈한 신간 도서입니다`);
  }
}
const book1 = new Book("java", 360, 32000, "김윤주", "2025-05-15");
book1.qustion();
