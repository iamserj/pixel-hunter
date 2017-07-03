/**
 * Created by @iamserj on 01.07.2017.
 */

import IntroScreen from './screen/intro';
import GreetingScreen from './screen/greeting';
import RulesScreen from './screen/rules';
import GameScreen from './screen/game/game';
import ResultsScreen from './screen/results';

const ControllerID = {
  INTRO: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  RESULTS: `results`
};

const getControllerIDFromHash = (hash) => hash.replace(`#`, ``);

class Application {

  constructor() {

    this.routes = {
      [ControllerID.INTRO]: IntroScreen,
      [ControllerID.GREETING]: GreetingScreen,
      [ControllerID.RULES]: RulesScreen,
      [ControllerID.GAME]: GameScreen,
      [ControllerID.RESULTS]: ResultsScreen
    };

    window.addEventListener(`hashchange`, () => {
      this.changeController(getControllerIDFromHash(location.hash));
    });
  }

  changeController(route = ``) {
    const routeArray = route.split(`-`);
    const Controller = this.routes[routeArray[0]];
    new Controller().init(routeArray[1]);
  }

  init() {
    this.changeController(getControllerIDFromHash(location.hash));
  }

  showIntro() {
    location.hash = ControllerID.INTRO;
  }

  showGreeting() {
    location.hash = ControllerID.GREETING;
  }

  showRules() {
    location.hash = ControllerID.RULES;
  }

  showGame() {
    location.hash = ControllerID.GAME;
  }

  showResults() {
    location.hash = ControllerID.RESULTS;
  }

}

const App = new Application();
App.init();

export default App;

