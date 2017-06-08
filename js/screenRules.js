/**
 * Created by soniko on 30.05.2017.
 */

import game1Screen from './screenGame1';
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
    <input class="rules__input" type="text" placeholder="Ваше Имя" pattern="[A-Za-z]" maxlength="22" required>
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
</div>`;

const rulesScreen = createElement(rulesMarkup);
const nameInput = rulesScreen.querySelector(`.rules__input`);
const submitNameButton = rulesScreen.querySelector(`.rules__button`);
const backButton = rulesScreen.querySelector(`.header__back`);

const nameInputInputHandler = (event) => {
  submitNameButton.disabled = nameInput.value ? false : true;
};
nameInput.addEventListener(`input`, nameInputInputHandler);

const submitNameButtonHandler = (event) => {
  event.preventDefault();
  showNextScreen(game1Screen);
};
submitNameButton.addEventListener(`click`, submitNameButtonHandler);

const backButtonHandler = (event) => {
  event.preventDefault();
  showNextScreen(greetingScreen);
};
backButton.addEventListener(`click`, backButtonHandler);

export default rulesScreen;
