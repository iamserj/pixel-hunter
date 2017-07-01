/**
 * Created by @iamserj on 12.06.2017.
 */

import HeaderBlockView from './blockHeader-view';
import showNextScreen, {updateHeader} from '../utils/showNextScreen';
import greetingScreen from './greeting';
import {headerData, answers} from '../data';
import {showNextGame} from './game';


const headerBlockView = new HeaderBlockView();

const headerBlock = () => {

  headerBlockView.backButtonHandler = () => {
    stopTimer();
    showNextScreen(greetingScreen());
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
    showNextGame();
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
