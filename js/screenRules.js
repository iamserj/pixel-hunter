/**
 * Created by soniko on 30.05.2017.
 */

import {userData} from './model';
import {showNextGame, resetGame} from './game';
import greetingScreen from './screenGreeting';
import createElement from './createDOMElement';
import showNextScreen from './showNextScreen';

const rulesMarkup = `\
<header class="header">
  <div class="header__back">
    <span class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.png" width="101" height="44">
    </span>
  </div>
</header>
<div class="rules">
  <h1 class="rules__title">Правила</h1>
  <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
    src="img/photo_icon.png" width="16" height="16"> или рисунок <img
    src="img/paint_icon.png" width="16" height="16" alt="">.<br>
    Фотографиями или рисунками могут быть оба изображения.<br>
    На каждую попытку отводится 30 секунд.<br>
    Ошибиться можно не более 3 раз.<br>
    <br>
    Готовы?
  </p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя" required>
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
</div>`;

const rulesScreen = createElement(rulesMarkup);
const nameInput = rulesScreen.querySelector(`.rules__input`);
const submitNameButton = rulesScreen.querySelector(`.rules__button`);
const backButton = rulesScreen.querySelector(`.header__back`);

const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 22;
const NAME_REGEXP = new RegExp(`[A-Za-zА-Яа-яЁё0-9_.-]+`);

const nameInputKeyHandler = (event) => {
  const keyValue = String.fromCharCode(event.which);
  if (!NAME_REGEXP.test(keyValue)) {
    event.preventDefault();
  }
};
const nameInputInputHandler = (event) => {
  const name = nameInput.value.length;
  if (name >= NAME_MIN_LENGTH && name < NAME_MAX_LENGTH) {
    submitNameButton.disabled = false;
  } else {
    submitNameButton.disabled = true;
  }
};
nameInput.addEventListener(`keypress`, nameInputKeyHandler);
nameInput.addEventListener(`input`, nameInputInputHandler);

const submitNameButtonHandler = (event) => {
  event.preventDefault();
  userData.name = nameInput.value;
  resetGame();
  showNextGame();
};
submitNameButton.addEventListener(`click`, submitNameButtonHandler);

const backButtonHandler = (event) => {
  event.preventDefault();
  showNextScreen(greetingScreen);
};
backButton.addEventListener(`click`, backButtonHandler);

export default rulesScreen;
