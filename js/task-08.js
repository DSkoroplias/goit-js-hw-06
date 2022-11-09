const mainForm = document.querySelector(".login-form");

mainForm.addEventListener("submit", sendFormSubmit);

function sendFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const emailEl = email.value;
  const passwordEl = password.value;

  if (emailEl === "" || passwordEl === "") {
    return alert("Не заповненні поля");
  }

  const user = {};
  user.email = emailEl;
  user.password = passwordEl;

  console.log(user);

  event.currentTarget.reset();
}
