/**
 * Created by @iamserj on 30.05.2017.
 */

import GreetingScreenView from './screenGreeting-view';
import rulesScreen from './screenRules';
import showNextScreen from './showNextScreen';

const greetingScreen = new GreetingScreenView();

greetingScreen.nextButtonHandler = () => {
  showNextScreen(rulesScreen.element);
};

export default greetingScreen;
