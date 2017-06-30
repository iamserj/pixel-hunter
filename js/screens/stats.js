/**
 * Created by @iamserj on 30.05.2017.
 */

import StatsScreenView from './stats-view';
import showNextScreen from '../utils/showNextScreen';
import greetingScreen from './greeting';

const statsScreen = () => {
  const statsScreenView = new StatsScreenView();

  statsScreenView.backButtonHandler = () => {
    showNextScreen(greetingScreen());
  };

  return statsScreenView.element;
};

export default statsScreen;
