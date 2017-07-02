/**
 * Created by @iamserj on 30.05.2017.
 */

import App from '../../application';
import {Game1View, Game2View, Game3View} from './game-view';
import headerBlock, {startTimer, stopTimer, renderHeader} from './blockHeader';
import statsBlock from './blockStats';
import {MAX_LEVELS_AMOUNT, GameType} from '../../data';
import {game, answers, levelTypes, headerData, allStats, currentLevel} from '../../data';
import renderScreen from '../../utils/showNextScreen';


export default class GameScreen {
  constructor() {}

  init() {

    if (!game.started) {
      game.started = true;
      this._headerElement = headerBlock();
      currentLevel.reset();
      headerData.resetLives();
      answers.reset();
      levelTypes.reset();
    }

    stopTimer();
    if (currentLevel.level === MAX_LEVELS_AMOUNT || headerData.lives === 0) {
      game.started = false;
      allStats.stats = answers.data;
      App.showResults();
      return;
    }

    currentLevel.up();
    headerData.resetTime();

    switch (levelTypes.levelsArray[currentLevel.level - 1]) {
      case GameType.ONE_IMAGE:
        this.view = new Game1View();
        break;
      case GameType.TWO_IMAGE:
        this.view = new Game2View();
        break;
      case GameType.THREE_IMAGE:
        this.view = new Game3View();
        break;
      default:
      // default action
    }

    this._statsElement = statsBlock();
    renderScreen(this._headerElement, this.view.element, this._statsElement);
    renderHeader();
    startTimer();

    this.view.answerHandler = () => {
      this.init();
    };
  }
}
