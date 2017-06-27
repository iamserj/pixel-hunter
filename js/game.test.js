/**
 * Created by soniko on 26.06.2017.
 */

import assert from 'assert';
import {levelTypes, answers, headerData, statsData, currentLevel, MAX_LEVELS_AMOUNT} from './model';

const showNextGameTest = () => {
  if (currentLevel.level === MAX_LEVELS_AMOUNT || headerData.lives === 0) {
    return;
  }
  currentLevel.up();
};

const resetAndStartGameTest = () => {
  currentLevel.reset();
  headerData.resetLives();
  answers.reset();
  levelTypes.reset();
  statsData.reset();
  showNextGameTest();
};

const timerCountTest = () => {
  if (headerData.time !== 0) {
    headerData.time--;
  }
};

describe(`Game`, () => {

  describe(`Levels should start from 1 and shouldn't be greater than 10`, () => {

    it(`resetAndStartGame() should start levels from 1`, () => {
      resetAndStartGameTest();
      assert.strictEqual(1, currentLevel.level);
    });

    it(`showNextGame() shouldn't increase level number higher than 10`, () => {
      for (let i; i < 50; i++) {
        showNextGameTest();
      }
      assert.ok(currentLevel.level <= MAX_LEVELS_AMOUNT);
    });

  });

  describe(`Timer should be in range from 30 to 0`, () => {

    it(`resetTime() sets headerData.time to 30`, () => {
      headerData.resetTime();
      assert.strictEqual(30, headerData.time);
    });

    it(`timerCount() shouldn't decrease headerData.time lower than 0`, () => {
      for (let i; i < 50; i++) {
        timerCountTest();
        assert.strictEqual(0, headerData.time);
      }
    });

  });

});
