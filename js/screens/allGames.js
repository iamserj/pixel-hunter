/**
 * Created by @iamserj on 30.05.2017.
 */

import createElement from '../utils/createDOMElement';
import {showNextGame} from '../game';
import {ANSWER_VARIETY, answers, taskType} from '../data';
import resizeImage from '../utils/resizeImage';


const game1Markup = (image) => `\
<div class="game">
  <p class="game__task">Угадайте, фото или рисунок?</p>
  <form class="game__content  game__content--wide">
    <div class="game__option">
      <img id="imageid" src= ${image[0]} alt="Option 1" width="705" height="455">
      <label class="game__answer  game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--wide  game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>
</div>`;

const game2Markup = (image) => `\
<div class="game">
  <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
  <form class="game__content">
    <div class="game__option">
      <img id="imageid1" src= ${image[0][0]} alt="Option 1" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
    <div class="game__option">
      <img id="imageid2" src= ${image[1][0]} alt="Option 2" width="468" height="458">
      <label class="game__answer  game__answer--photo">
        <input name="question2" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input name="question2" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>
</div>`;

const game3Markup = (image, taskText) => `\
<div class="game">
  <p class="game__task">${taskText}</p>
  <form class="game__content game__content--triple">
    <div class="game__option" id="option0">
      <img id="imageid1" src= ${image[0][0]} alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option" id="option1">
      <img id="imageid2" src= ${image[1][0]} alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option" id="option2">
      <img id="imageid3" src= ${image[2][0]} alt="Option 1" width="304" height="455">
    </div>
  </form>
</div>`;


const imageOnload = (imageElement) => {
  const loadInterval = setInterval(function () {
    if (imageElement.naturalWidth) {
      clearInterval(loadInterval);
      const container = {width: imageElement.width, height: imageElement.height};
      const naturalFrame = {width: imageElement.naturalWidth, height: imageElement.naturalHeight};
      const actualSize = resizeImage(container, naturalFrame);
      imageElement.style.width = actualSize.width + `px`;
      imageElement.style.height = actualSize.height + `px`;
      imageElement.style.marginTop = (container.height - imageElement.height) / 2 + `px`;
      imageElement.style.visibility = `visible`;
    }
  }, 10);
};

export const game1Screen = (image) => {
  const game1Block = createElement(game1Markup(image));
  const img = game1Block.querySelector(`#imageid`);
  img.style.visibility = `hidden`;
  img.onload = imageOnload(img);

  const question1 = game1Block.querySelectorAll(`input[name="question1"]`);

  Array.from(question1).forEach((answer) => {
    answer.addEventListener(`click`, function (event) {
      const isCorrect = answers.check(event.target.value, image[1]);
      answers.save(isCorrect);
      showNextGame();
    });
  });

  return game1Block;
};

export const game2Screen = (image) => {
  let answer1 = ``;
  let answer2 = ``;
  let firstAnswered = false;
  let secondAnswered = false;

  const game2Block = createElement(game2Markup(image));
  const img1 = game2Block.querySelector(`#imageid1`);
  const img2 = game2Block.querySelector(`#imageid2`);
  img1.style.visibility = `hidden`;
  img2.style.visibility = `hidden`;
  img1.onload = imageOnload(img1);
  img2.onload = imageOnload(img2);

  const question1 = game2Block.querySelectorAll(`input[name="question1"]`);
  const question2 = game2Block.querySelectorAll(`input[name="question2"]`);

  Array.from(question1).forEach((answer) => {
    answer.addEventListener(`click`, function (event) {
      if (firstAnswered) {
        event.preventDefault();
        return;
      }
      firstAnswered = true;
      answer1 = answer.value;
      checkAnotherAnswer();
    });
  });

  Array.from(question2).forEach((answer) => {
    answer.addEventListener(`click`, function (event) {
      if (secondAnswered) {
        event.preventDefault();
        return;
      }
      secondAnswered = true;
      answer2 = answer.value;
      checkAnotherAnswer();
    });
  });

  const checkAnotherAnswer = () => {
    if (answer1 !== `` && answer2 !== ``) {
      const isCorrectFirst = answers.check(answer1, image[0][1]);
      const isCorrectSecond = answers.check(answer2, image[1][1]);
      answers.save(isCorrectFirst, isCorrectSecond);
      showNextGame();
      answer1 = answer2 = ``;
    }
  };

  return game2Block;
};

export const game3Screen = (image) => {
  const game3Block = createElement(game3Markup(image, taskType.taskText));

  const img1 = game3Block.querySelector(`#imageid1`);
  const img2 = game3Block.querySelector(`#imageid2`);
  const img3 = game3Block.querySelector(`#imageid3`);
  img1.style.visibility = `hidden`;
  img2.style.visibility = `hidden`;
  img3.style.visibility = `hidden`;
  img1.onload = imageOnload(img1);
  img2.onload = imageOnload(img2);
  img3.onload = imageOnload(img3);

  const question1 = game3Block.querySelectorAll(`.game__option`);

  Array.from(question1).forEach((answer) => {
    answer.addEventListener(`click`, function (event) {
      const selectedAnswer = image[event.target.id.slice(-1)][1];
      answers.save(selectedAnswer === ANSWER_VARIETY[taskType.task]);
      showNextGame();
    });
  });

  return game3Block;
};
