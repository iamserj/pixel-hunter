/**
 * Created by @iamserj on 30.05.2017.
 */

import ResultsScreenView from './results-view';
import App from '../application';
import {AnswerCode, AnswerType, allStats} from '../data';
import renderScreen from '../utils/showNextScreen';

export default class ResultsScreen {
  constructor() {}

  init(hash) {
    const answersArray = [];
    if (hash) {
      for (let i = 0; i < hash.length; i++) {
        const answerCode = AnswerCode[hash[i]];
        answersArray[i] = AnswerType[answerCode];
      }
      allStats.stats = answersArray;
    }

    this.view = new ResultsScreenView();
    this.view.backButtonHandler = () => App.showGreeting();
    renderScreen(this.view.element);
  }
}
