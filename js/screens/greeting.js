/**
 * Created by @iamserj on 30.05.2017.
 */

import GreetingScreenView from './greeting-view';
import rulesScreen from './rules';
import showNextScreen from '../utils/showNextScreen';

const greetingScreen = () => {
  const greetingScreenView = new GreetingScreenView();

  greetingScreenView.nextButtonHandler = () => {
    showNextScreen(rulesScreen());
  };

  return greetingScreenView.element;
};

export default greetingScreen;
