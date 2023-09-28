const categoiesList = document.getElementById(`categories`);
const categoryItems = categoiesList.querySelectorAll(`.item`);
const numberOfCategories = categoryItems.length;
console.log(`Number of categories: ${numberOfCategories}`);
categoryItems.forEach(item => {
  const categoryName = item.querySelector(`h2`).textContent;
  const elementsList = item.querySelectorAll(`ul li`);
  const numberOfElements = elementsList.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${numberOfElements}`);
});
