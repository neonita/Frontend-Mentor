let adviceNum = document.querySelector(".card__number");
let adviceText = document.querySelector(".card__advice-generated");
let btn = document.querySelector(".card__btn");

// Generates a random advice so that the
// advice element is not empty on landing page.
const randomAdvice = (response) => {
  const slip = response.data.slip;
  const adviceId = slip.id;
  const adviceTxt = slip.advice;

  adviceNum.innerHTML = adviceId;
  adviceText.innerHTML = adviceTxt;
};

const showAdvice = (response) => {
  const slip = response.data.slip;
  const adviceId = slip.id;
  const adviceTxt = slip.advice;

  adviceNum.innerHTML = adviceId;
  adviceText.innerHTML = adviceTxt;
};

const apiUrl = `https://api.adviceslip.com/advice`;

window.addEventListener("load", () => {
  axios.get(apiUrl).then(randomAdvice);
});

btn.addEventListener("click", (event) => {
  let apiUrl = `https://api.adviceslip.com/advice`;
  axios.get(apiUrl).then(showAdvice);
});
