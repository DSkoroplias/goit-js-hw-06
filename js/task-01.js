const navEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${navEl.length}`);
console.log("");

navEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  const listEl = item.lastElementChild;
  console.log(`Elements: ${listEl.children.length}`);
  console.log("");
});
