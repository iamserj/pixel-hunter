/**
 * Created by @iamserj on 01.07.2017.
 */

import IntroScreen from './screen/intro';
import GreetingScreen from './screen/greeting';
import RulesScreen from './screen/rules';
//import GameScreen from './screen/game';
import {resetAndStartGame, showNextGame} from './screen/game/game';
import ResultsScreen from './screen/results';


class Application {

  constructor() {
    this._intro = new IntroScreen();
    this._greeting = new GreetingScreen();
    this._rules = new RulesScreen();
    //this._game = new Game();
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
    resetAndStartGame();
    showNextGame();
  }

  showNextGame() {
    showNextGame();
  }

  showResults() {
    this._results.init();
  }

}

const App = new Application();

export default App;

