function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.getElementById('controls');
const boxesContainer = document.getElementById('boxes');
const createButton = controls.querySelector('button[data-create]');
const destroyButton = controls.querySelector('button[data-destroy]');
const input = controls.querySelector('input[type="number"]');
function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  createBoxes(amount);
});
destroyButton.addEventListener('click', destroyBoxes);
