/**
 * Created by @iamserj on 30.05.2017.
 */


import {NAME_MIN_LENGTH, NAME_MAX_LENGTH, NAME_REGEXP, userData} from '../data';
import {resetAndStartGame} from '../game';
import RulesScreenView from './rules-view';
import greetingScreen from './greeting';
import showNextScreen from '../utils/showNextScreen';


const rulesScreen = () => {
  const rulesScreenView = new RulesScreenView();

  rulesScreenView.nameInputKeypressHandler = (event) => {
    const keyValue = String.fromCharCode(event.which);
    const name = rulesScreenView.nameInputElement.value.length;
    if (!NAME_REGEXP.test(keyValue) || name >= NAME_MAX_LENGTH) {
      event.preventDefault();
    }
  };

  rulesScreenView.nameInputInputHandler = () => {
    const name = rulesScreenView.nameInputElement.value.length;
    rulesScreenView.submitNameButtonElement.disabled = !(name >= NAME_MIN_LENGTH);
  };

  rulesScreenView.submitNameButtonHandler = () => {
    userData.name = rulesScreenView.nameInputElement.value;
    resetAndStartGame();
    rulesScreenView.nameInputElement.value = ``;
    rulesScreenView.submitNameButtonElement.disabled = true;
  };

  rulesScreenView.backButtonHandler = () => {
    showNextScreen(greetingScreen());
  };

  return rulesScreenView.element;
};

export default rulesScreen;
