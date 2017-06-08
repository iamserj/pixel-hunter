/**
 * Created by soniko on 01.06.2017.
 */

import footerBlock from './moduleFooter';

const mainScreen = document.querySelector(`main.central`);

const showNextScreen = (screen) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screen);
  mainScreen.appendChild(footerBlock);
};

export default showNextScreen;
