/**
 * Created by soniko on 30.05.2017.
 */

import createElement from './createDOMElement';
import {showNextGame} from './game';
import {answers, AnswerType} from './model';

const game1Markup = (photo) => `\
<div class="game">
  <p class="game__task">Угадайте, фото или рисунок?</p>
  <form class="game__content  game__content--wide">
    <div class="game__option">
      <img id="imageid" src= ${photo[0]} alt="Option 1" width="705" height="455">
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


const game1Screen = (photo) => {

  const game1Block = createElement(game1Markup(photo));

  const img = game1Block.querySelector(`#imageid`);
  img.style.visibility = `hidden`;
  const parentRatio = img.width / img.height;
  const containerHeight = img.height;

  img.onload = function () {
    const ratio = this.naturalWidth / this.naturalHeight;
    if (ratio < parentRatio) {
      img.style.height = `100%`;
      img.style.width = `auto`;
    } else {
      img.style.width = `100%`;
      img.style.height = `auto`;
      img.style.marginTop = (containerHeight - this.height) / 2 + "px";
    }
    img.style.visibility = `visible`;
  };

  const question1 = game1Block.querySelectorAll(`input[name="question1"]`);

  Array.from(question1).forEach((answer) => {
    answer.addEventListener(`click`, function (event) {
      // TODO save answer.value here
      answers.data = AnswerType.CORRECT;
      showNextGame();
    });
  });

  return game1Block;
};

export default game1Screen;
