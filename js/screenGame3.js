/**
 * Created by soniko on 30.05.2017.
 */

import createElement from './createDOMElement';
import {showNextGame} from './game';
import {answers, AnswerType} from './model';

const game3Markup = `\
<div class="game">
  <p class="game__task">Найдите рисунок среди изображений</p>
  <form class="game__content  game__content--triple">
    <div class="game__option">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>
  </form>
</div>`;

const game3Screen = createElement(game3Markup);
const question1 = game3Screen.querySelectorAll(`.game__option`);

Array.from(question1).forEach((answer) => {
  answer.addEventListener(`click`, function (event) {
    // TODO save answer here
    answers.data = AnswerType.CORRECT;
    showNextGame();
  });
});

export default game3Screen;
