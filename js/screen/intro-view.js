/**
 * Created by @iamserj on 28.06.2017.
 */

import AbstractView from '../view';

const introMarkup = `\
<div id="main" class="central__content">
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>
</div>`;

export default class IntroScreenView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return introMarkup;
  }

  bind() {
    const asterisk = this.element.querySelector(`.intro__asterisk`);

    const asteriskClick = (event) => {
      event.preventDefault();
      this.asteriskHandler();
    };

    asterisk.addEventListener(`click`, asteriskClick);
  }

  asteriskHandler() {}
}
