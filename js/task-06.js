const inputEL = document.querySelector('#validation-input');
console.log(inputEL);

inputEL.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(inputEL.dataset.length)) {
    
    inputEL.classList.remove('invalid');
    inputEL.classList.add('valid');
  } 
  else if (event.currentTarget.value.length !== Number(inputEL.dataset.length)) {
    
    inputEL.classList.remove('valid');
    inputEL.classList.add('invalid');
  }
}
