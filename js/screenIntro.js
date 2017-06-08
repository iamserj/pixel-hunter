/**
 * Created by soniko on 30.05.2017.
 */

import greetingScreen from './screenGreeting';
import createElement from './createDOMElement';
import showNextScreen from './showNextScreen';

const introMarkup = `\
<div id="main" class="central__content">
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>
</div>`;


const introScreen = createElement(introMarkup);

const asterisk = introScreen.querySelector(`.intro__asterisk`);
asterisk.addEventListener(`click`, asteriskHandler);

function asteriskHandler(event) {
  event.preventDefault();
  asterisk.removeEventListener(`click`, asteriskHandler);
  showNextScreen(greetingScreen);
}

export default introScreen;
