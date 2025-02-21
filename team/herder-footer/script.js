const home = document.querySelector("#home");

home.addEventListener("click", () => {
  home.classList.toggle("active");
});

const search = document.querySelector(".search");
search.addEventListener("click", () => {
  search.classList.add("active");
});
