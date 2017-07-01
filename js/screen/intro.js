/**
 * Created by @iamserj on 30.05.2017.
 */

import IntroScreenView from './intro-view';
import App from '../application';
import renderScreen from '../utils/showNextScreen';

export default class IntroScreen {
  constructor() {
    this.view = new IntroScreenView();
  }

  init() {
    this.view.asteriskHandler = () => App.showGreeting();
    renderScreen(this.view.element);
  }
};
