const formEl = document.querySelector('.login-form');
console.log(formEl);

formEl.addEventListener('submit', onSubmitChange);

function onSubmitChange(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }
  const userDetails = { email: email.value, password: password.value };

  event.currentTarget.reset();

  console.log(userDetails);
}
