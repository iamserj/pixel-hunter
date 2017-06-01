/**
 * Created by soniko on 01.06.2017.
 */

const mainScreen = document.querySelector(`main.central`);

const showScreen = (screen) => {
  mainScreen.innerHTML = "";
  mainScreen.appendChild(screen);
};

export default showScreen;
