/**
 * Created by soniko on 30.05.2017.
 */

import rulesScreen from './screenRules';
import createElement from './createDOMElement';
import showNextScreen from './showNextScreen';

const greetingMarkup = `\
<div class="greeting central--blur">
  <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
  <h1 class="greeting__asterisk">*</h1>
  <div class="greeting__challenge">
    <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
    <p>Правила игры просты.<br>
      Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
      Задача кажется тривиальной, но не думай, что все так просто.<br>
      Фотореализм обманчив и коварен.<br>
      Помни, главное — смотреть очень внимательно.</p>
  </div>
  <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
</div>`;

const greetingScreen = createElement(greetingMarkup);
const leftButton = greetingScreen.querySelector(`.greeting__continue`);

const leftButtonHandler = (event) => {
  event.preventDefault();
  showNextScreen(rulesScreen);
};
leftButton.addEventListener(`click`, leftButtonHandler);

export default greetingScreen;
