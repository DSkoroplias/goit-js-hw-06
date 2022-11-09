function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const backgroundColor = document.body;
const colorText = document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");

const randomChangeColor = (color) => {
  colorText.textContent = getRandomHexColor(color);
  backgroundColor.style.backgroundColor = colorText.textContent;
  buttonChangeColor.style.backgroundColor = colorText.textContent;
};

buttonChangeColor.addEventListener("click", randomChangeColor);
