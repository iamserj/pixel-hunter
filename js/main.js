/**
 * Created by soniko on 26.05.2017.
 */

(function () {

  const greetingScreen = document.querySelector(`#greeting`);
  const rulesScreen = document.querySelector(`#rules`);
  const game1Screen = document.querySelector(`#game-1`);
  const game2Screen = document.querySelector(`#game-2`);
  const game3Screen = document.querySelector(`#game-3`);
  const statsScreen = document.querySelector(`#stats`);

  const mainScreen = document.querySelector(`main.central`);
  const screens = [greetingScreen, rulesScreen, game1Screen, game2Screen, game3Screen, statsScreen];
  let currentScreen = -1;
  let previousScreen;

  const Keys = {
    LEFT: 37,
    RIGHT: 39
  };

  const showScreen = () => {
    if (previousScreen !== currentScreen) {
      previousScreen = currentScreen;
      window.scrollTo(0, 0);
      mainScreen.innerHTML = screens[currentScreen].innerHTML;
    }
  };

  const keyboardListener = (event) => {
    const code = event.keyCode;
    if (code === Keys.LEFT && event.altKey && currentScreen >= 1) {
      currentScreen--;
      showScreen();
    } else if (code === Keys.RIGHT && event.altKey && currentScreen < screens.length - 1) {
      currentScreen++;
      showScreen();
    }
  };
  document.addEventListener(`keydown`, keyboardListener, false);

})();
