const form = document.querySelector(".form");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btn = document.querySelector(".form__btn");
const errorFn = document.querySelector(".error-first-name");
const errorLn = document.querySelector(".error-last-name");
const errorEmail = document.querySelector(".error-email");
const errorPw = document.querySelector(".error-password");

const displayError = (inputType, message, errmsg) => {
  // grab parent element of input type
  let parent = inputType.parentElement;

  // grab icon
  let icon = parent.querySelector(".form__icon img");

  // add red outline
  inputType.classList.add("error-input");

  // display error icon
  icon.style.visibility = "visible";

  // display error msg
  errmsg.innerText = message;
  errmsg.style.display = "block";
};

const validateEmail = (inputEmail) => {
  let reGex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return reGex.test(inputEmail);
};

const checkInputs = () => {
  //  First name
  if (
    firstName.value === "" ||
    firstName.value === null ||
    firstName.length === 0
  ) {
    displayError(firstName, "First name cannot be empty", errorFn);
  } else {
    console.log("✅ Valid! (firstname)");
  }

  // Last name
  if (
    lastName.value === "" ||
    lastName.value === null ||
    lastName.length === 0
  ) {
    displayError(lastName, "Last name cannot be empty", errorLn);
  } else {
    console.log("Last Name: ✅ Valid!");
  }

  // Email
  if (email.value === "" || email.value === null || email.length === 0) {
    displayError(email, "Email address cannot be empty", errorEmail);
  } else if (!validateEmail(email.value)) {
    email.placeholder = "email@example/com";
    displayError(email, "Looks like this is not an email", errorEmail);
  } else {
    console.log("Email: ✅ Valid!");
  }

  // Password
  if (password.value.length <= 7) {
    displayError(password, "Password cannot be empty", errorPw);
  } else {
    console.log("✅ Valid! (pw)");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

/**
 *  Object.value!!!!!!
 */
