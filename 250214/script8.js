class BookC {
  constructor(tirtle, price) {
    this.tirtle = tirtle;
    this.price = price;
  }

  buy() {
    console.log(`${this.tirtle}를 ${this.price}원에 구매하였습니다.`);
  }
}

const book1 = new BookC("자료구조", 15000);

book1.buy();

// 기존의 클래스 생성자를 상속받을때 extends(연장)
class TextBookC extends BookC {
  constructor(tirtle, price, major) {
    super(tirtle, price); // 상속받아올 값
    this.major = major;
  }

  buyTextBook() {
    console.log(`${this.major} 전공서적 ${this.tirtle}을 통해 구매`);
  }
}

const book2 = new TextBookC("인공지능", 5000, "컴퓨터공학");
console.log(book2);
book2.buyTextBook();
book2.buy();
