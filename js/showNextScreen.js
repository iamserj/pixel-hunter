/**
 * Created by soniko on 01.06.2017.
 */

import footerBlock from './moduleFooter';

const mainScreen = document.querySelector(`main.central`);

export const appendScreenElements = (...elements) => {
  mainScreen.innerHTML = ``;
  elements.forEach((item) => {
    mainScreen.appendChild(item);
  });
  mainScreen.appendChild(footerBlock);
};

export const updateHeader = (headerElement = ``) => {
  mainScreen.querySelector(`.header`).innerHTML = ``;
  mainScreen.querySelector(`.header`).appendChild(headerElement);
};

const showNextScreen = (screen) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screen);
  mainScreen.appendChild(footerBlock);
};

export default showNextScreen;
