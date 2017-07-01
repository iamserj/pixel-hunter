/**
 * Created by @iamserj on 30.05.2017.
 */

import ResultsScreenView from './results-view';
import App from '../application';
import renderScreen from '../utils/showNextScreen';

export default class ResultsScreen {
  constructor() {}

  init() {
    this.view = new ResultsScreenView();
    this.view.backButtonHandler = () => App.showGreeting();
    renderScreen(this.view.element);
  }
};
