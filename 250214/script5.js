const book1 = {
  title: "Javascript",
  pages: 648,
  buy: function () {
    console.log("I did buy this book");
  },
};

// 객체 자료구조를 배열로 변환시킬 수 있을까?
//  객체를 배열로 바꿀때
const keys = Object.keys(book1);
// console.log(typeof keys);
const values = Object.values(book1);
// console.log(values);
const entries = Object.entries(book1);
console.log(entries);
