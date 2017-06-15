/**
 * Created by soniko on 30.05.2017.
 */

import createElement from './createDOMElement';
import {showNextGame} from './game';
import {answers, AnswerType} from './model';

const game2Markup = `\
<div class="game">
  <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
  <form class="game__content">
    <div class="game__option">
      <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
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
      <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
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

const game2Screen = createElement(game2Markup);
const question1 = game2Screen.querySelectorAll(`input[name="question1"]`);
const question2 = game2Screen.querySelectorAll(`input[name="question2"]`);

let answer1;
let answer2;

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
  if (typeof answer1 !== `undefined` && typeof answer2 !== `undefined`) {
    // TODO save answers here
    answers.data = AnswerType.CORRECT;
    showNextGame();
  }
};

export default game2Screen;
