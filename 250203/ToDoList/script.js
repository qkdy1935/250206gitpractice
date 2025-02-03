// const btn = document.querySelector("input[type='submit']");
// btn.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("click");
// });

// 변수
// const form = document.querySelector("form");
// const user = document.querySelector("#todo-list");
// const ul = document.querySelector("ul");

// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // 이벤트 설정

//   if (user.value !== "") {
//     const li = document.createElement("li");
//     li.innerText = user.value;
//     ul.appendChild(li); // 리스트 등록

//     user.value = ""; // 등록 후 빈칸
//   }
// });

const form = document.querySelector("form");
const user = document.querySelector("#todo-list");
const ul = document.querySelector("ul");
//배열
let todos = [];

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

//   => 콜백지옥 가기전 정리
const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const but = document.createElement("button");

    const delItem = (event) => {
      const target = event.target.parentElement;
      todos = todos.filter((todo) => todo.id != target.id);
      save();
      // target.id = 숫자 ,  todo.id = 문자 => 타입이 다르기 떄문에 깊은비교(!==) 아닌 얕은 비교(!=)
      // console.lor(typeof target.id);

      target.remove(); // dom에서 제거 => localStorage에서는 제거안됨
    };

    span.innerText = todo.text;
    but.innerText = "삭제"; // 삭제버튼
    but.addEventListener("click", delItem);

    li.append(span, but);
    li.id = todo.id;
    ul.prepend(li);
  }
};

const headler = (event) => {
  event.preventDefault();
  const todo = {
    id: Date.now(),
    text: user.value,
  };
  todos.push(todo);
  addItem(todo);
  save();
  user.value = "";
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));
  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    todos = userTodos;
  }
};

init();
form.addEventListener("submit", headler);

// console.log(todos);

/* Local storage사용 */
// localStorage.setItem("hello", "world"); // 값 저장
// const my = localStorage.getItem("hello"); // 값 찾아오기
// console.log(my);
