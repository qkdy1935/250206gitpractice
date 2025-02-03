const fruitItems = document.querySelector("#items");
const displayFruit = () => {
  let selectedText = fruitItems.options[fruitItems.selectedIndex].innerText;
  console.log(selectedText);
  alert(`${selectedText}를 선택했습니다!`);
};

fruitItems.addEventListener("change", displayFruit);
