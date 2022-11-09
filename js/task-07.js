const fontSizeControlEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

const inputRange = (event) => {
  //   console.log(event);

  textEl.style.fontSize = event.currentTarget.value + "px";
};

fontSizeControlEl.addEventListener("input", inputRange);
