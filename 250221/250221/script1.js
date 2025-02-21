const string = prompt("영문 소문자로 된 문자열을 입력해주세요.");

// const firstC = string[0].toUpperCase();
// const restr = string.slice(1);
// const result = firstC + restr;

// split() = 문자영릉 배열로 바꿔주는 역할
// join() = 배열을 문자열로 바꿔주는 역할
// concat() = 서로 다른 두개의 배열 혹은 유사배열을 1개의 배열로 합칠때 => [...]

const result = [string[0].toUpperCase(), ...string.slice(1)].join();
console.log(result);
