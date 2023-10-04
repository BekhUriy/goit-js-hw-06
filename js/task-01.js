const categoiesList = document.getElementById(`categories`);
const categoryItems = categoiesList.querySelectorAll(`.item`);
const numberOfCategories = categoryItems.length;
console.log(`Number of categories: ${numberOfCategories}`);
categoryItems.forEach(item => {
  const categoryName = item.querySelector(`h2`).textContent;
  const firstElement = item.querySelector(`ul li:first-child`);
  const lastElement = item.querySelector(`ul li:last-child`);
  const numberOfElements = item.querySelectorAll(`ul li`).length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${numberOfElements}`);
});
