const inputEl = document.querySelector('#name-input');
console.log(inputEl);
const spanEl = document.querySelector('#name-output');
console.log(spanEl);

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  spanEl.textContent = event.currentTarget.value;
}
