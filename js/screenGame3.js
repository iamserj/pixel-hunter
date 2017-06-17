/**
 * Created by soniko on 30.05.2017.
 */

import createElement from './createDOMElement';
import {showNextGame} from './game';
import {answers, AnswerType} from './model';

const game3Markup = (photo) => `\
<div class="game">
  <p class="game__task">Найдите рисунок среди изображений</p>
  <form class="game__content game__content--triple">
    <div class="game__option">
      <img id="imageid1" src= ${photo[0][0]} alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected">
      <img id="imageid2" src= ${photo[1][0]} alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option">
      <img id="imageid3" src= ${photo[2][0]} alt="Option 1" width="304" height="455">
    </div>
  </form>
</div>`;

const game3Screen = (photo) => {

  const game3Block = createElement(game3Markup(photo));

  const img1 = game3Block.querySelector(`#imageid1`);
  const img2 = game3Block.querySelector(`#imageid2`);
  const img3 = game3Block.querySelector(`#imageid3`);
  img1.style.visibility = `hidden`;
  img2.style.visibility = `hidden`;
  img3.style.visibility = `hidden`;
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
  img3.onload = function () {
    const ratio = this.naturalWidth / this.naturalHeight;
    if (ratio < parentRatio) {
      img3.style.height = `100%`;
      img3.style.width = `auto`;
    } else {
      img3.style.width = `100%`;
      img3.style.height = `auto`;
    }
    img3.style.visibility = `visible`;
  };

  const question1 = game3Block.querySelectorAll(`.game__option`);

  Array.from(question1).forEach((answer) => {
    answer.addEventListener(`click`, function (event) {
      // TODO save answer here
      answers.data = AnswerType.CORRECT;
      showNextGame();
    });
  });

  return game3Block;
};

export default game3Screen;
