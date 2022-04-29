let adviceNum = document.querySelector(".card__number");
let adviceBlock = document.querySelector(".card__advice");
let adviceText = document.querySelector(".card__advice-generated");
let btn = document.querySelector(".card__btn");

const shrink = (adviceData) => {
  console.log(adviceData.length);

  if (adviceData.length > 90) {
    adviceText.style.fontSize = "1.2rem";
    adviceBlock.style.fontSize = "1.2rem";
  }
};

const showAdvice = (id, txt) => {
  shrink(txt);

  adviceNum.innerHTML = id;
  adviceText.innerHTML = txt;
};

const grabData = (response) => {
  const slip = response.data.slip;
  const adviceId = slip.id;
  const adviceTxt = slip.advice;

  showAdvice(adviceId, adviceTxt);
};

const apiUrl = `https://api.adviceslip.com/advice`;

window.addEventListener("load", () => {
  axios.get(apiUrl).then(grabData);
});

btn.addEventListener("click", (event) => {
  event.preventDefault();

  let apiUrl = `https://api.adviceslip.com/advice`;
  axios.get(apiUrl).then(grabData);
});
