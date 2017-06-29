/**
 * Created by @iamserj on 14.06.2017.
 */

import {game1Screen, game2Screen, game3Screen} from './screens/allGames';
import statsScreen from './screens/stats';
import headerBlock, {startTimer, stopTimer, renderHeader} from './screens/blockHeader';
import showNextScreen, {appendScreenElements} from './utils/showNextScreen';
import {levelTypes, answers, GameType, headerData, statsData, currentLevel, getImages, MAX_LEVELS_AMOUNT} from './data';
import statsBlock from './screens/blockStats';


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
      gameElement = game1Screen(getImages(1));
      break;
    case GameType.TWO_IMAGE:
      gameElement = game2Screen(getImages(2));
      break;
    case GameType.THREE_IMAGE:
      gameElement = game3Screen(getImages(3));
      break;
    default:
      // default action
  }

  statsElement = statsBlock();

  appendScreenElements(headerElement, gameElement, statsElement);
  renderHeader();

  startTimer();
};
