/**
 * Created by @iamserj on 30.05.2017.
 */

import createElement from './createDOMElement';
import {showNextGame} from './game';
import {answers} from './data';
import resizeImage from './resizeImage';

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


const game1Screen = (image) => {
  const game1Block = createElement(game1Markup(image));
  const img = game1Block.querySelector(`#imageid`);
  img.style.visibility = `hidden`;
  const containerFrame = {width: img.width, height: img.height};

  img.onload = function () {
    const naturalFrame = {width: img.naturalWidth, height: img.naturalHeight};
    const actualSize = resizeImage(containerFrame, naturalFrame);
    img.style.width = actualSize.width + `px`;
    img.style.height = actualSize.height + `px`;
    img.style.marginTop = (containerFrame.height - this.height) / 2 + `px`;
    img.style.visibility = `visible`;
  };

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

export default game1Screen;
