/**
 * Created by soniko on 30.05.2017.
 */

import createElement from './createDOMElement';
import {showNextGame} from './game';
import {answers, AnswerType} from './model';

const game2Markup = (photo) => `\
<div class="game">
  <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
  <form class="game__content">
    <div class="game__option">
      <img id="imageid1" src= ${photo[0][0]} alt="Option 1" width="468" height="458">
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
      <img id="imageid2" src= ${photo[1][0]} alt="Option 2" width="468" height="458">
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

const game2Screen = (photo) => {

  const game2Block = createElement(game2Markup(photo));

  const img1 = game2Block.querySelector(`#imageid1`);
  const img2 = game2Block.querySelector(`#imageid2`);
  img1.style.visibility = `hidden`;
  img2.style.visibility = `hidden`;
  const parentRatio = img1.width / img1.height;

  img1.onload = function () {
    const ratio = this.naturalWidth / this.naturalHeight;
    if (ratio < parentRatio) {
      img1.style.height = `100%`;
      img1.style.width = `auto`;
    } else {
      img1.style.width = `100%`;
      img1.style.height = `auto`;
    }
    img1.style.visibility = `visible`;
  };
  img2.onload = function () {
    const ratio = this.naturalWidth / this.naturalHeight;
    if (ratio < parentRatio) {
      img2.style.height = `100%`;
      img2.style.width = `auto`;
    } else {
      img2.style.width = `100%`;
      img2.style.height = `auto`;
    }
    img2.style.visibility = `visible`;
  };

  const question1 = game2Block.querySelectorAll(`input[name="question1"]`);
  const question2 = game2Block.querySelectorAll(`input[name="question2"]`);

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

  return game2Block;
};

const checkAnotherAnswer = () => {
  if (answer1 !== `` && answer2 !== ``) {
    // TODO save answers here
    answers.data = AnswerType.CORRECT;
    showNextGame();
    answer1 = answer2 = ``;
  }
};

export default game2Screen;
