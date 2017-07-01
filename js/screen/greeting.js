/**
 * Created by @iamserj on 30.05.2017.
 */

import GreetingScreenView from './greeting-view';
import App from '../application';
import renderScreen from '../utils/showNextScreen';

export default class GreetingScreen {
  constructor() {
    this.view = new GreetingScreenView();
  }

  init() {
    this.view.nextButtonHandler = () => App.showRules();
    renderScreen(this.view.element);
  }
};
