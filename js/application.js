/**
 * Created by @iamserj on 01.07.2017.
 */

import IntroScreen from './screen/intro';
import GreetingScreen from './screen/greeting';
import RulesScreen from './screen/rules';
import GameScreen from './screen/game/game';
import ResultsScreen from './screen/results';


class Application {

  constructor() {
    this._intro = new IntroScreen();
    this._greeting = new GreetingScreen();
    this._rules = new RulesScreen();
    this._game = new GameScreen();
    this._results = new ResultsScreen();
  }

  showIntro() {
    this._intro.init();
  }

  showGreeting() {
    this._greeting.init();
  }

  showRules() {
    this._rules.init();
  }

  startNewGame() {
    this._game.init();
    this._game.showNextGame();
  }

  showNextGame() {
    this._game.showNextGame();
  }

  showResults() {
    this._results.init();
  }

}

const App = new Application();

export default App;

