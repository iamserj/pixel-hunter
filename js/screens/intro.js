/**
 * Created by @iamserj on 30.05.2017.
 */

import IntroScreenView from './intro-view';
import greetingScreen from './greeting';
import showNextScreen from '../utils/showNextScreen';

const introScreen = () => {
  const introScreenView = new IntroScreenView();

  introScreenView.asteriskHandler = () => {
    showNextScreen(greetingScreen());
  };

  return introScreenView.element;
};

export default introScreen;
