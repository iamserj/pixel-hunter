/**
 * Created by soniko on 30.05.2017.
 */

import createElement from './createDOMElement';
import {showNextGame} from './game';
import {answers} from './data';
import resizeImage from './resizeImage';

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

let answer1 = ``;
let answer2 = ``;

const game2Screen = (image) => {

  const game2Block = createElement(game2Markup(image));
  const img1 = game2Block.querySelector(`#imageid1`);
  const img2 = game2Block.querySelector(`#imageid2`);
  img1.style.visibility = `hidden`;
  img2.style.visibility = `hidden`;
  const frame = {width: img1.width, height: img1.height};

  img1.onload = function () {
    const natural = {width: img1.naturalWidth, height: img1.naturalHeight};
    const actualSize = resizeImage(frame, natural);
    img1.style.width = actualSize.width + `px`;
    img1.style.height = actualSize.height + `px`;
    img1.style.marginTop = (frame.height - this.height) / 2 + `px`;
    img1.style.visibility = `visible`;
  };
  img2.onload = function () {
    const natural = {width: img2.naturalWidth, height: img2.naturalHeight};
    const actualSize = resizeImage(frame, natural);
    img2.style.width = actualSize.width + `px`;
    img2.style.height = actualSize.height + `px`;
    img2.style.marginTop = (frame.height - this.height) / 2 + `px`;
    img2.style.visibility = `visible`;
  };

  const question1 = game2Block.querySelectorAll(`input[name="question1"]`);
  const question2 = game2Block.querySelectorAll(`input[name="question2"]`);

  // TODO: if one answer selected, don't allow user to change it
  Array.from(question1).forEach((answer) => {
    answer.addEventListener(`click`, function (event) {
      answer1 = answer.value;
      checkAnotherAnswer();
    });
  });

  Array.from(question2).forEach((answer) => {
    answer.addEventListener(`click`, function (event) {
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

export default game2Screen;
