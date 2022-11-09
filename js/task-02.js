const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const navEl = document.querySelector("#ingredients");

const elements = [];

ingredients.forEach((liItem) => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = liItem;
  elements.push(listEl);
});

// console.log(elements);

navEl.append(...elements);
