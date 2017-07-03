/**
 * Created by @iamserj on 01.06.2017.
 */

import footerBlock from '../screen/blockFooter';


const mainScreen = document.querySelector(`main.central`);

export const showPreloader = () => {
  mainScreen.innerHTML = `<div class="loader"></div>`;
};

export const updateHeader = (headerElement = ``) => {
  mainScreen.querySelector(`.header`).innerHTML = ``;
  mainScreen.querySelector(`.header`).appendChild(headerElement);
};

const renderScreen = (...screen) => {
  mainScreen.innerHTML = ``;
  screen.forEach((item) => mainScreen.appendChild(item));
  mainScreen.appendChild(footerBlock());
};

export default renderScreen;
