/**
 * Created by @iamserj on 12.06.2017.
 */

import App from '../../application';
import HeaderBlockView from './blockHeader-view';
import renderScreen, {updateHeader} from '../../utils/showNextScreen';
import greetingScreen from '../greeting';
import {headerData, answers} from '../../data';


const headerBlockView = new HeaderBlockView();

const headerBlock = () => {

  headerBlockView.backButtonHandler = () => {
    stopTimer();
    renderScreen(greetingScreen());
  };

  return headerBlockView.element;
};
export default headerBlock;


export const renderHeader = () => {
  updateHeader(headerBlockView.render());
  headerBlockView.bind();
};

let intervalId;

const timerCount = () => {
  headerData.time--;
  renderHeader();
  if (headerData.time === 0) {
    clearInterval(intervalId);
    answers.save(false);
    App.showNextGame();
  }
};

export const startTimer = () => {
  headerData.resetTime();
  clearInterval(intervalId);
  intervalId = setInterval(timerCount, 1000);
};

export const stopTimer = () => {
  clearInterval(intervalId);
  headerData.resetTime();
};
