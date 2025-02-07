const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", function () {
  const gnb = document.querySelector(".modal-gnb");

  this.classList.toogle("active");
  gnb.classList.toogle("active");
});
