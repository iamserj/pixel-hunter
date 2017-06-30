/**
 * Created by @iamserj on 30.05.2017.
 */

import AbstractView from '../view';

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

let nameInput;
let submitNameButton;
let backButton;

export default class RulesScreenView extends AbstractView {
  get template() {
    return rulesMarkup;
  }

  get nameInputElement() {
    return nameInput;
  }
  get submitNameButtonElement() {
    return submitNameButton;
  }
  get backButtonElement() {
    return backButton;
  }

  bind() {
    nameInput = this.element.querySelector(`.rules__input`);
    submitNameButton = this.element.querySelector(`.rules__button`);
    backButton = this.element.querySelector(`.header__back`);

    const submitNameButtonClick = (event) => {
      event.preventDefault();
      this.submitNameButtonHandler();
    };

    const backButtonClick = (event) => {
      event.preventDefault();
      this.backButtonHandler();
    };

    nameInput.addEventListener(`keypress`, this.nameInputKeypressHandler);
    nameInput.addEventListener(`input`, this.nameInputInputHandler);
    submitNameButton.addEventListener(`click`, submitNameButtonClick);
    backButton.addEventListener(`click`, backButtonClick);
  }

  nameInputKeypressHandler(event) {}
  nameInputInputHandler(event) {}
  submitNameButtonHandler() {}
  backButtonHandler() {}
}

