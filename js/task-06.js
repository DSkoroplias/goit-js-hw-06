const valInputEl = document.querySelector("#validation-input");

const validation = () => {
  valInputEl.classList.remove("valid", "invalid");

  let classElem = "invalid";
  if (valInputEl.value.length === Number(valInputEl.dataset.length)) {
    classElem = "valid";
  }
  valInputEl.classList.add(classElem);
};

valInputEl.addEventListener("blur", validation);
