/**
 * Created by @iamserj on 30.05.2017.
 */

import RulesScreenView from './rules-view';
import App from '../application';
import renderScreen from '../utils/showNextScreen';

import {NAME_MIN_LENGTH, NAME_MAX_LENGTH, NAME_REGEXP, userData} from '../data';


export default class RulesScreen {
  constructor() {
    this.view = new RulesScreenView();
  }

  init() {
    this.view.nameInputKeypressHandler = (event) => {
      const keyValue = String.fromCharCode(event.which);
      const name = this.view.nameInputElement.value.length;
      if (!NAME_REGEXP.test(keyValue) || name >= NAME_MAX_LENGTH) {
        event.preventDefault();
      }
    };

    this.view.nameInputInputHandler = () => {
      const name = this.view.nameInputElement.value.length;
      this.view.submitNameButtonElement.disabled = !(name >= NAME_MIN_LENGTH);
    };

    this.view.submitNameButtonHandler = () => {
      userData.name = this.view.nameInputElement.value;
      App.startNewGame();
      this.view.nameInputElement.value = ``;
      this.view.submitNameButtonElement.disabled = true;
    };

    this.view.backButtonHandler = () => App.showGreeting();

    renderScreen(this.view.element);
  }
}
