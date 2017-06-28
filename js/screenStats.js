/**
 * Created by @iamserj on 30.05.2017.
 */

import StatsScreenView from './screenStats-view';
import showNextScreen from './showNextScreen';
import greetingScreen from './screenGreeting';

const statsScreen = new StatsScreenView();

statsScreen.backButtonHandler = () => {
  showNextScreen(greetingScreen.element);
};

export default statsScreen;
