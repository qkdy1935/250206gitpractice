window.onload = () => {
  const bg = 5;

  let rendomNum = Math.floor(Math.random() * bg + 1);
  document.body.style.backgroundImage = `url("./images/bg-${rendomNum}.jpg")`;
};
