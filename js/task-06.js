const validationInput = document.getElementById('validation-input');
validationInput.addEventListener('blur', () => {
  const expectedLength = parseInt(validationInput.dataset.length);
  const enteredLength = validationInput.value.trim().length;
  if (enteredLength === expectedLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});
