/**
 * Created by @iamserj on 30.05.2017.
 */


import {userData} from './data';
import {resetAndStartGame} from './game';
import RulesScreenView from './screenRules-view';
import greetingScreen from './screenGreeting';
import showNextScreen from './showNextScreen';

const rulesScreen = new RulesScreenView();

const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 22;
const NAME_REGEXP = new RegExp(`[A-Za-zА-Яа-яЁё0-9_.-]+`);

rulesScreen.nameInputKeyHandler = (event) => {
  const keyValue = String.fromCharCode(event.which);
  if (!NAME_REGEXP.test(keyValue)) {
    event.preventDefault();
  }
};

rulesScreen.nameInputInputHandler = () => {
  const name = rulesScreen.nameInputElement.value.length;
  if (name >= NAME_MIN_LENGTH && name < NAME_MAX_LENGTH) {
    rulesScreen.submitNameButtonElement.disabled = false;
  } else {
    rulesScreen.submitNameButtonElement.disabled = true;
  }
};

rulesScreen.submitNameButtonHandler = () => {
  userData.name = rulesScreen.nameInputElement.value;
  resetAndStartGame();
  rulesScreen.nameInputElement.value = ``;
  rulesScreen.submitNameButtonElement.disabled = true;
};

rulesScreen.backButtonHandler = () => {
  showNextScreen(greetingScreen.element);
};

export default rulesScreen;
