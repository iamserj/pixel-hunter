/**
 * Created by soniko on 12.06.2017.
 */

import greetingScreen from './screenGreeting';
import createElement from './createDOMElement';
import showNextScreen from './showNextScreen';

const maxLives = 3;
const headerMarkup = (state) => `\
<header class="header">
  <div class="header__back">
    <span class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.png" width="101" height="44">
    </span>
  </div>
  <h1 class="game__timer"> ${state.time} </h1>
  <div class="game__lives">
    ${new Array(maxLives - state.lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(` `)}
      ${new Array(state.lives)
        .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
        .join(` `)}
  </div>
</header>`;


export const headerWithState = (state) => {
  let headerBlock = createElement(headerMarkup(state));
  const backButton = headerBlock.querySelector(`.header__back`);
  backButton.addEventListener(`click`, backButtonHandler);
  return headerBlock;
};

const backButtonHandler = (event) => {
  event.preventDefault();
  showNextScreen(greetingScreen);
};


let intervalId;

export const startTimer = () => {
  /* clearInterval(intervalId);
  currentHeaderState.time = headerData.time;  // reset timer
  intervalId = setInterval(function() {
    currentHeaderState.time--;
    updateHeader();
    if (currentHeaderState.time === 0) {
      clearInterval(intervalId);
      // TODO: go to the next level
    }
  }, 1000); */
};

export const stopGame = () => {
  clearInterval(intervalId);
};
