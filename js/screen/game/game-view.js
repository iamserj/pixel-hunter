/**
 * Created by @iamserj on 30.05.2017.
 */

import AbstractView from '../../view';
import resizeImage from '../../utils/resizeImage';
import {getImages, taskType} from '../../data';


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


// TODO: merge with ../utils/resizeImage
const imageOnload = (imageElement) => {
  const loadInterval = setInterval(() => {
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


let answer1ImageType;

export class Game1View extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    const imageData = getImages(1);
    answer1ImageType = imageData[1];
    return game1Markup(imageData);
  }

  bind() {
    const img = this.element.querySelector(`#imageid`);
    img.style.visibility = `hidden`;
    img.onload = imageOnload(img);

    const answerClick = (event) => {
      this.answerHandler(event, answer1ImageType);
    };

    const question1 = this.element.querySelectorAll(`input[name="question1"]`);
    Array.from(question1).forEach((answer) => answer.addEventListener(`click`, answerClick));
  }

  answerHandler(event, answerType) {}
}


let answer2Image1Type;
let answer2Image2Type;

export class Game2View extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    const imageData = getImages(2);
    answer2Image1Type = imageData[0][1];
    answer2Image2Type = imageData[1][1];
    return game2Markup(imageData);
  }

  bind() {
    const img1 = this.element.querySelector(`#imageid1`);
    const img2 = this.element.querySelector(`#imageid2`);
    img1.style.visibility = `hidden`;
    img2.style.visibility = `hidden`;
    img1.onload = imageOnload(img1);
    img2.onload = imageOnload(img2);

    const question1 = this.element.querySelectorAll(`input[name="question1"]`);
    const question2 = this.element.querySelectorAll(`input[name="question2"]`);

    const answer1Click = (event) => {
      this.answer1Handler(event, answer2Image1Type);
    };
    const answer2Click = (event) => {
      this.answer2Handler(event, answer2Image2Type);
    };

    Array.from(question1).forEach((answer) => answer.addEventListener(`click`, answer1Click));
    Array.from(question2).forEach((answer) => answer.addEventListener(`click`, answer2Click));
  }
  answer1Handler(event, answerType) {}
  answer2Handler(event, answerType) {}
}


let answer3ImageType;
let answer3ImageData;

export class Game3View extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    answer3ImageData = getImages(3);
    answer3ImageType = taskType.task;
    return game3Markup(answer3ImageData, taskType.taskText);
  }

  bind() {
    const img1 = this.element.querySelector(`#imageid1`);
    const img2 = this.element.querySelector(`#imageid2`);
    const img3 = this.element.querySelector(`#imageid3`);
    img1.style.visibility = `hidden`;
    img2.style.visibility = `hidden`;
    img3.style.visibility = `hidden`;
    img1.onload = imageOnload(img1);
    img2.onload = imageOnload(img2);
    img3.onload = imageOnload(img3);

    const question1 = this.element.querySelectorAll(`.game__option`);

    const answerClick = (event) => {
      this.answerHandler(event, answer3ImageData, answer3ImageType);
    };

    Array.from(question1).forEach((answer) => answer.addEventListener(`click`, answerClick));
  }

  answerHandler(event, imageData, answerType) {}
}
