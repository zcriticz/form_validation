const formContainer = document.querySelector(".form-input");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordConfirmationInput = document.querySelector(
  "#password-confirmation"
);

formContainer.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
});

usernameInput.addEventListener("blur", () => {
  checkInputUsername();
});

emailInput.addEventListener("blur", () => {
  checkInputEmail();
});

passwordInput.addEventListener("blur", () => {
  checkPassword();
});

passwordConfirmationInput.addEventListener("blur", () => {
  checkInputPasswordConfirmation();
});

function checkInputUsername() {
  const usernameValue = usernameInput.value;

  if (usernameValue === "") {
    errorInput(usernameInput, "Username cannot be empty");
  } else {
    const formItem = usernameInput.parentElement;
    formItem.className = "form-input__content";
  }
}

function checkInputEmail() {
  const emailValue = emailInput.value;

  if (emailValue === "") {
    errorInput(emailInput, "Email cannot be empty");
  } else {
    const formItem = emailInput.parentElement;
    formItem.className = "form-input__content";
  }
}

function checkPassword() {
  const passwordValue = passwordInput.value;

  if (passwordValue === "") {
    errorInput(passwordInput, "Password cannot be empty");
  } else if (passwordValue.length < 8) {
    errorInput(passwordInput, "Password must be at least 8 characters");
  } else {
    const formItem = passwordInput.parentElement;
    formItem.className = "form-input__content";
  }
}

function checkInputPasswordConfirmation() {
  const passwordConfirmationValue = passwordConfirmationInput.value;
  const passwordValue = passwordInput.value;

  if (passwordConfirmationValue === "") {
    errorInput(
      passwordConfirmationInput,
      "Password confirmation cannot be empty"
    );
  } else if (passwordConfirmationValue !== passwordValue) {
    errorInput(
      passwordConfirmationInput,
      "Password confirmation must be the same as password"
    );
  } else {
    const formItem = passwordConfirmationInput.parentElement;
    formItem.className = "form-input__content";
  }
}

function checkForm() {
  checkInputUsername();
  checkInputEmail();
  checkPassword();
  checkInputPasswordConfirmation();

  const formItens = document.querySelectorAll(".form-input__content");

  const isValid = [...formItens].every((item) => {
    return item.className === "form-input__content";
  });

  if (isValid) {
    alert("Form submitted");
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("span");

  textMessage.innerText = message;
  formItem.className = "form-input__content error";
}
