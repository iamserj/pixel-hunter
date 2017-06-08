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
</div>
<footer class="footer">
  <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
  <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2017</span>
  <div class="footer__social-links">
    <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
    <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
    <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
    <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
  </div>
</footer>`;

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
