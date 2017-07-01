/**
 * Created by @iamserj on 30.05.2017.
 */

import {Game1View, Game2View, Game3View} from './game-view';
import {ANSWER_VARIETY, answers} from '../data';

import headerBlock, {startTimer, stopTimer, renderHeader} from './blockHeader';
import statsBlock from './blockStats';
import {levelTypes, GameType, headerData, statsData, currentLevel, MAX_LEVELS_AMOUNT} from '../data';
import showNextScreen, {appendScreenElements} from '../utils/showNextScreen';
import statsScreen from './stats';


const game1 = () => {
  const game1BlockView = new Game1View();
  game1BlockView.answerHandler = (event, answerType) => {
    const isCorrect = answers.check(event.target.value, answerType);
    answers.save(isCorrect);
    showNextGame();
  };
  return game1BlockView.element;
};

const game2 = () => {
  const game2BlockView = new Game2View();

  let answer1 = ``;
  let answer2 = ``;
  let firstAnswered = false;
  let secondAnswered = false;
  let firstImageType;
  let secondImageType;

  game2BlockView.answer1Handler = (event, answerType) => {
    if (firstAnswered) {
      event.preventDefault();
      return;
    }
    // TODO: try use condition (answer1 !== ``)
    firstAnswered = true;
    answer1 = event.target.value;
    firstImageType = answerType;
    checkAnotherAnswer();
  };
  game2BlockView.answer2Handler = (event, answerType) => {
    if (secondAnswered) {
      event.preventDefault();
      return;
    }
    secondAnswered = true;
    answer2 = event.target.value;
    secondImageType = answerType;
    checkAnotherAnswer();
  };

  const checkAnotherAnswer = () => {
    if (answer1 !== `` && answer2 !== ``) {
      const isCorrectFirst = answers.check(answer1, firstImageType);
      const isCorrectSecond = answers.check(answer2, secondImageType);
      answers.save(isCorrectFirst, isCorrectSecond);
      showNextGame();
      answer1 = answer2 = ``;
      firstAnswered = false;
      secondAnswered = false;
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
    showNextGame();
  };
  return game3BlockView.element;
};


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
