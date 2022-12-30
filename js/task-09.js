const conteiner = document.querySelector('.widget');
const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

buttonEl.addEventListener('click', changeColor);

function changeColor() {
  const color = getRandomHexColor();
  conteiner.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = color;
  console.log(spanEl);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
