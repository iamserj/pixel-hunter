/**
 * Created by @iamserj on 01.07.2017.
 */

import IntroScreen from './screen/intro';
import GreetingScreen from './screen/greeting';
import RulesScreen from './screen/rules';
import GameScreen from './screen/game/game';
import ResultsScreen from './screen/results';

import {ServerData, gameData, loadedImages} from './data';
import {showPreloader} from './utils/showNextScreen';

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

    showPreloader();

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

    this.fetchFromServer();
  }

  fetchFromServer() {
    fetch(ServerData.questions)
      .then((response) => response.json())
      .then((result) => {
        // save game data
        gameData.data = result;

        // preload images
        const allImages = [];
        result.forEach((question) => {
          question.answers.forEach(({image}) => {
            allImages.push(image.url);
          });
        });

        let loadedCounter = 0;
        const images = [];
        const preload = (imagesSrc) => {
          for (let i = 0; i < imagesSrc.length; i++) {
            images[i] = new Image();
            images[i].onload = () => {
              loadedCounter++;
              if (loadedCounter === allImages.length) {
                this.init();
                loadedImages.data = images;
              }
            };
            images[i].src = imagesSrc[i];
          }
        };
        preload(allImages);
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

export default App;
