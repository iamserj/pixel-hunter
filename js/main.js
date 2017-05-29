/**
 * Created by soniko on 26.05.2017.
 */

(function () {

  const mainScreen = document.querySelector(`main.central`);
  const screens = [`#greeting`, `#rules`, `#game-1`, `#game-2`, `#game-3`, `#stats`].map((id) => document.querySelector(id));
  let currentScreen = 0;
  let previousScreen;

  const Keys = {
    LEFT: 37,
    RIGHT: 39
  };

  const showScreen = () => {
    if (previousScreen !== currentScreen) {
      previousScreen = currentScreen;
      window.scrollTo(0, 0);
      mainScreen.innerHTML = screens[currentScreen - 1].innerHTML;
    }
  };

  const keyboardHandler = (event) => {
    const code = event.keyCode;
    if (code === Keys.LEFT && event.altKey) {
      event.preventDefault();
      if (currentScreen >= 2) {
        currentScreen--;
        showScreen();
      }
    } else if (code === Keys.RIGHT && event.altKey) {
      event.preventDefault();
      if (currentScreen < screens.length) {
        currentScreen++;
        showScreen();
      }
    }
  };
  document.addEventListener(`keydown`, keyboardHandler, false);

})();
