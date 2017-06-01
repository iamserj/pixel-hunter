/**
 * Created by soniko on 26.05.2017.
 */

import {introScreen, enableListeners} from './screenIntro';
import showNextScreen from './showNextScreen';

showNextScreen(introScreen);
enableListeners();

//const screens = [`#greeting`, `#rules`, `#game-1`, `#game-2`, `#game-3`, `#stats`].map((id) => document.querySelector(id));
