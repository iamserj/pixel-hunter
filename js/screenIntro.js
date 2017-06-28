/**
 * Created by @iamserj on 30.05.2017.
 */

import IntroScreenView from './screenIntro-view';
import greetingScreen from './screenGreeting';
import showNextScreen from './showNextScreen';

const introScreen = new IntroScreenView();

introScreen.asteriskHandler = () => {
  showNextScreen(greetingScreen.element);
};

export default introScreen;
