// 사용자로 하여금 화씨온도를 언달받아서 섭씨온도로 변환해서 정보를 제공할 예정

// 화씨온도를 어떻게 전달받을 것인가?
//  => window라는 회면을 통해서 전달
// window.prompt("당신이 변환할 화씨온도를 입력하세요!")

// 전달받은 화씨온도가 어떤 공식을 통해서 섭씨온도가 되게 할 것인가?
// BOM : Browser Object Model

// const fah = window.prompt("당신이 변환할 화씨온도를 입력하세요!");
// const cel = ((fah - 32) / 1.8).toFixed(1);
const fah = prompt("당신이 변환할 화씨온도를 입력하세요!");
const cel = ((fah - 32) / 1.8).toFixed(1);

// const fah =  값을 받아서 담아야할 떄 => 변수선언

// alert = 알림장

alert(`화씨온도 ${fah}는 섭씨온도 ${cel}입니다.`);
