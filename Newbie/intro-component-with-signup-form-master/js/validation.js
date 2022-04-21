const form = document.querySelector(".form");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btn = document.querySelector(".form__btn");

const displayError = (inputType, message) => {};

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
    alert("🚫  Error!");
  } else {
    console.log("✅ Valid! (firstname)");
  }

  // Last name
  if (
    lastName.value === "" ||
    lastName.value === null ||
    lastName.length === 0
  ) {
    alert("🚫  Error!");
  } else {
    console.log("✅ Valid! (lastname)");
  }

  // Email
  if (
    lastName.value === "" ||
    lastName.value === null ||
    lastName.length === 0
  ) {
    alert("🚫  Error! Please enter an email.");
  } else if (!validateEmail(email.value)) {
    alert("🚫 Error! Please enter a valid email.");
  } else {
    alert("✅ Valid! (email)");
  }

  // Password
  if (password.value.length <= 7) {
    alert("🚫  Error! Password cannot be empty or less than 7 characters");
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
