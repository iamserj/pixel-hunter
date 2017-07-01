/**
 * Created by @iamserj on 01.07.2017.
 */

import {game1, game2, game3} from './screens/game';
import headerBlock, {startTimer, stopTimer, renderHeader} from './screens/blockHeader';
import statsBlock from './screens/blockStats';
import {answers, levelTypes, GameType, headerData, statsData, currentLevel, MAX_LEVELS_AMOUNT} from './data';
import showNextScreen, {appendScreenElements} from './utils/showNextScreen';
import statsScreen from './screens/stats';


const headerElement = headerBlock();
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
  stopTimer();
  if (currentLevel.level === MAX_LEVELS_AMOUNT || headerData.lives === 0) {
    showNextScreen(statsScreen());
    return;
  }

  currentLevel.up();

  headerData.resetTime();

  switch (levelTypes.levelsArray[currentLevel.level - 1]) {
    case GameType.ONE_IMAGE:
      gameElement = game1();
      break;
    case GameType.TWO_IMAGE:
      gameElement = game2();
      break;
    case GameType.THREE_IMAGE:
      gameElement = game3();
      break;
    default:
    // default action
  }

  statsElement = statsBlock();

  appendScreenElements(headerElement, gameElement, statsElement);
  renderHeader();

  startTimer();
};
