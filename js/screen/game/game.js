/**
 * Created by @iamserj on 30.05.2017.
 */

import App from '../../application';
import {Game1View, Game2View, Game3View} from './game-view';
import headerBlock, {startTimer, stopTimer, renderHeader} from './blockHeader';
import statsBlock from './blockStats';
import {ANSWER_VARIETY, MAX_LEVELS_AMOUNT, GameType} from '../../data';
import {answers, levelTypes, headerData, allStats, currentLevel} from '../../data';
import renderScreen from '../../utils/showNextScreen';


const game1 = () => {
  const game1BlockView = new Game1View();
  game1BlockView.answerHandler = (event, answerType) => {
    const isCorrect = answers.check(event.target.value, answerType);
    answers.save(isCorrect);
    App.showNextGame();
  };
  return game1BlockView.element;
};

const game2 = () => {
  const game2BlockView = new Game2View();
  let answer1 = ``;
  let answer2 = ``;
  let firstImageType;
  let secondImageType;
  game2BlockView.answer1Handler = (event, answerType) => {
    if (answer1 !== ``) {
      event.preventDefault();
      return;
    }
    answer1 = event.target.value;
    firstImageType = answerType;
    checkAnotherAnswer();
  };
  game2BlockView.answer2Handler = (event, answerType) => {
    if (answer2 !== ``) {
      event.preventDefault();
      return;
    }
    answer2 = event.target.value;
    secondImageType = answerType;
    checkAnotherAnswer();
  };

  const checkAnotherAnswer = () => {
    if (answer1 !== `` && answer2 !== ``) {
      const isCorrectFirst = answers.check(answer1, firstImageType);
      const isCorrectSecond = answers.check(answer2, secondImageType);
      answers.save(isCorrectFirst, isCorrectSecond);
      App.showNextGame();
      answer1 = answer2 = ``;
    }
  };
  return game2BlockView.element;
};

const game3 = () => {
  const game3BlockView = new Game3View();
  game3BlockView.answerHandler = (event, imageData, answerType) => {
    const selectedAnswer = imageData[event.target.id.slice(-1)][1];
    const isCorrect = selectedAnswer === ANSWER_VARIETY[answerType];
    answers.save(isCorrect);
    App.showNextGame();
  };
  return game3BlockView.element;
};


export default class GameScreen {
  constructor() {}

  init() {
    this._headerElement = headerBlock();
    currentLevel.reset();
    headerData.resetLives();
    answers.reset();
    levelTypes.reset();
  }

  showNextGame() {
    stopTimer();
    if (currentLevel.level === MAX_LEVELS_AMOUNT || headerData.lives === 0) {
      allStats.stats = answers.data;
      App.showResults();
      return;
    }

    currentLevel.up();
    headerData.resetTime();

    switch (levelTypes.levelsArray[currentLevel.level - 1]) {
      case GameType.ONE_IMAGE:
        this._gameElement = game1();
        break;
      case GameType.TWO_IMAGE:
        this._gameElement = game2();
        break;
      case GameType.THREE_IMAGE:
        this._gameElement = game3();
        break;
      default:
      // default action
    }

    this._statsElement = statsBlock();
    renderScreen(this._headerElement, this._gameElement, this._statsElement);
    renderHeader();
    startTimer();
  }
}
