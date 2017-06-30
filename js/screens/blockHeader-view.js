/**
 * Created by @iamserj on 12.06.2017.
 */

import AbstractView from '../view';
import {MAX_LIVES, headerData} from '../data';

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


export default class HeaderBlockView extends AbstractView {
  get template() {
    return headerMarkup(headerData);
  }

  bind() {
    const backButton = this.element.querySelector(`.header__back`);

    const backButtonClick = (event) => {
      event.preventDefault();
      this.backButtonHandler();
    };

    backButton.addEventListener(`click`, backButtonClick);
  }

  backButtonHandler() {}
}
