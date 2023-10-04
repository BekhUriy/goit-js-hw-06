const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.children;
const numberOfCategories = categoryItems.length;
console.log(`Number of categories: ${numberOfCategories}`);
for (const item of categoryItems) {
  const categoryName = item.firstElementChild.textContent;
  const elementsList = item.lastElementChild.children;
  const numberOfElements = elementsList.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${numberOfElements}`);
}
