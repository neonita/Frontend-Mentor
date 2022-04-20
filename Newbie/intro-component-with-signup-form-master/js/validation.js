const form = document.querySelector(".form");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btn = document.querySelector(".form__btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("submit button pressed!");
});

console.log();
