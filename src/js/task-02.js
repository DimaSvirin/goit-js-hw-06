// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const vegetables = document.querySelector("#ingredients");
let container = [];
ingredients.forEach(function (element) {
  const ingredient = document.createElement("li");
  ingredient.classList.add("item");
  ingredient.textContent = element;
  container.push(ingredient);
  
})
vegetables.append(...container);
console.log(vegetables);