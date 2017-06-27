/**
 * Created by soniko on 30.05.2017.
 */

import createElement from './createDOMElement';
import {showNextGame} from './game';
import {answers} from './data';
import resizeImage from './resizeImage';

const game3Markup = (image) => `\
<div class="game">
  <p class="game__task">Найдите рисунок среди изображений</p>
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

const game3Screen = (image) => {

  const game3Block = createElement(game3Markup(image));

  const img1 = game3Block.querySelector(`#imageid1`);
  const img2 = game3Block.querySelector(`#imageid2`);
  const img3 = game3Block.querySelector(`#imageid3`);
  img1.style.visibility = `hidden`;
  img2.style.visibility = `hidden`;
  img3.style.visibility = `hidden`;
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
  img3.onload = function () {
    const natural = {width: img3.naturalWidth, height: img3.naturalHeight};
    const actualSize = resizeImage(frame, natural);
    img3.style.width = actualSize.width + `px`;
    img3.style.height = actualSize.height + `px`;
    img3.style.marginTop = (frame.height - this.height) / 2 + `px`;
    img3.style.visibility = `visible`;
  };

  const question1 = game3Block.querySelectorAll(`.game__option`);

  Array.from(question1).forEach((answer) => {
    answer.addEventListener(`click`, function (event) {
      const selectedAnswer = image[event.target.id.slice(-1)][1];
      const availableAnswers = Array.prototype.slice.call(document.querySelectorAll(`.game__option`));
      availableAnswers.forEach(function (item, i) {
        if (item === event.target) {
          availableAnswers.splice(i, 1);
        }
      });
      const anotherAnswer0 = image[availableAnswers[0].id.slice(-1)][1];
      const anotherAnswer1 = image[availableAnswers[1].id.slice(-1)][1];
      answers.save(selectedAnswer !== anotherAnswer0 && selectedAnswer !== anotherAnswer1);

      showNextGame();
    });
  });

  return game3Block;
};

export default game3Screen;
