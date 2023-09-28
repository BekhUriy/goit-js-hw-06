const counterValueElement = document.getElementById('value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
function updateCounterValue() {
  counterValueElement.textContent = counterValue;
}
decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  updateCounterValue();
});
incrementButton.addEventListener('click', () => {
  counterValue += 1;
  updateCounterValue();
});
