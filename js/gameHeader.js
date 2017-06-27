/**
 * Created by soniko on 12.06.2017.
 */

import greetingScreen from './screenGreeting';
import createElement from './createDOMElement';
import showNextScreen, {updateHeader} from './showNextScreen';
import {showNextGame} from './game';
import {headerData, answers} from './data';

const MAX_LIVES = 3;
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
    ${new Array(MAX_LIVES - state.lives)
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

const timerCount = () => {
  headerData.time--;
  updateHeader(headerWithState(headerData));
  if (headerData.time === 0) {
    clearInterval(intervalId);
    answers.save(false);
    showNextGame();
  }
};

export const startTimer = () => {
  headerData.resetTime();
  clearInterval(intervalId);
  intervalId = setInterval(timerCount, 1000);
};

export const stopTimer = () => {
  clearInterval(intervalId);
};
