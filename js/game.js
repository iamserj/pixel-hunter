/**
 * Created by soniko on 14.06.2017.
 */

import game1Screen from './screenGame1';
import game2Screen from './screenGame2';
import game3Screen from './screenGame3';
import statsScreen from './screenStats';
import {headerWithState, startTimer, stopTimer} from './gameHeader';
import showNextScreen, {appendScreenElements} from './showNextScreen';
import {levelTypes, answers, gameType, headerData, statsData, currentLevel, getImages, MAX_LEVELS_AMOUNT} from './model';
import {statsWithState} from './gameStats';


let headerElement;
let gameElement;
let statsElement;

export const resetAndStartGame = () => {
  currentLevel.reset();
  headerData.resetLives();
  answers.reset();
  levelTypes.reset();
  statsData.reset();
  showNextGame();
};

export const showNextGame = () => {
  if (currentLevel.level === MAX_LEVELS_AMOUNT || headerData.lives === 0) {
    stopTimer();
    showNextScreen(statsScreen);
    return;
  }

  currentLevel.up();

  headerData.resetTime();
  headerElement = headerWithState(headerData);

  switch (levelTypes.levelsArray[currentLevel.level - 1]) {
    case gameType.ONE_IMAGE:
      gameElement = game1Screen(getImages(1));
      break;
    case gameType.TWO_IMAGE:
      gameElement = game2Screen(getImages(2));
      break;
    case gameType.THREE_IMAGE:
      gameElement = game3Screen(getImages(3));
      break;
    default:
      // default action
  }

  statsElement = statsWithState(answers.data);    // set initial stats state

  appendScreenElements(headerElement, gameElement, statsElement);

  startTimer();
};
