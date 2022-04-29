let adviceNum = document.querySelector(".card__number");
let adviceText = document.querySelector(".card__advice-generated");
let btn = document.querySelector(".card__btn");

const showAdvice = (response) => {
  const slip = response.data.slip;
  const adviceId = slip.id;
  const adviceTxt = slip.advice;
};

btn.addEventListener("click", (event) => {
  event.preventDefault();
  let apiUrl = `https://api.adviceslip.com/advice`;
  axios.get(apiUrl).then(showAdvice);
});
