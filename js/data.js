/**
 * Created by @iamserj on 12.06.2017.
 */

export const MAX_LIVES = 3;
export const MAX_LEVELS_AMOUNT = 10;
export const ANSWER_VARIETY = [`paint`, `photo`];
export const NAME_MIN_LENGTH = 2;
export const NAME_MAX_LENGTH = 14;
export const NAME_REGEXP = new RegExp(`[A-Za-zА-Яа-яЁё0-9_.-]+`);

export const AnswerTiming = {
  FAST: 20,
  SLOW: 10
};
export const Result = {
  WIN: `Победа!`,
  LOSE: `Не победа`
};
export const ScorePoints = {
  CORRECT: 100,
  FAST: 50,
  SLOW: -50,
  LIFE: 50,
  FAIL: `FAIL`
};


/**
 * USERNAME
 */
export const userData = {
  get name() {
    return this._name;
  },
  set name(newName) {
    this._name = newName;
  }
};

/**
 * GAME MAIN DATA
 */
export const currentLevel = {
  _currentLevel: 0,
  reset() {
    this._currentLevel = 0;
  },
  get level() {
    return this._currentLevel;
  },
  up() {
    this._currentLevel++;
  }
};

/**
 * GAME HEADER
 */
export const headerData = {
  _headerTime: 0,
  _headerLives: 0,
  _headerResult: ``,
  resetTime() {
    this._headerTime = 30;
  },
  resetLives() {
    this._headerLives = 3;
    this._headerResult = Result.WIN;
  },
  set time(time) {
    this._headerTime = time;
  },
  get time() {
    return this._headerTime;
  },
  set lives(lives) {
    if (lives === 0) {
      this._headerResult = Result.LOSE;
    }
    this._headerLives = lives;
  },
  get lives() {
    return this._headerLives;
  },
  get result() {
    return this._headerResult;
  }
};

/**
 * ANSWERS, IN-GAME STATS
 */
export const AnswerType = {
  UNKNOWN: `<li class="stats__result stats__result--unknown"></li>`,
  CORRECT: `<li class="stats__result stats__result--correct"></li>`,
  WRONG: `<li class="stats__result stats__result--wrong"></li>`,
  FAST: `<li class="stats__result stats__result--fast"></li>`,
  SLOW: `<li class="stats__result stats__result--slow"></li>`
};

export const answers = {
  _userAnswers: [],

  get data() {
    return this._userAnswers;
  },

  check(userAnswer, correctAnswer) {
    return (userAnswer === correctAnswer);
  },

  save(firstCorrect, secondCorrect = true) {
    if (firstCorrect && secondCorrect) {
      if (headerData.time >= AnswerTiming.FAST) {
        this._userAnswers[currentLevel.level - 1] = AnswerType.FAST;
      } else if (headerData.time < AnswerTiming.SLOW) {
        this._userAnswers[currentLevel.level - 1] = AnswerType.SLOW;
      } else {
        this._userAnswers[currentLevel.level - 1] = AnswerType.CORRECT;
      }
    } else {
      this._userAnswers[currentLevel.level - 1] = AnswerType.WRONG;
      headerData.lives--;
    }
  },

  reset() {
    this._userAnswers = (new Array(MAX_LEVELS_AMOUNT)).fill(AnswerType.UNKNOWN);
  }
};


/**
 * LAST SCREEN STATS
 */
export const allStats = {
  _stats: {
    'Леонид Аркадич': {
      life: 3,
      answers: [AnswerType.FAST, AnswerType.SLOW, AnswerType.CORRECT, AnswerType.SLOW, AnswerType.FAST, AnswerType.SLOW, AnswerType.CORRECT, AnswerType.CORRECT, AnswerType.FAST, AnswerType.SLOW]
    },
    'Семён Семёныч': {
      life: 1,
      answers: [AnswerType.CORRECT, AnswerType.CORRECT, AnswerType.CORRECT, AnswerType.CORRECT, AnswerType.SLOW, AnswerType.SLOW, AnswerType.WRONG, AnswerType.WRONG, AnswerType.CORRECT, AnswerType.CORRECT]
    },
    '12345678901234': {
      life: 0,
      answers: [AnswerType.CORRECT, AnswerType.CORRECT, AnswerType.FAST, AnswerType.WRONG, AnswerType.WRONG, AnswerType.WRONG, AnswerType.UNKNOWN, AnswerType.UNKNOWN, AnswerType.UNKNOWN, AnswerType.UNKNOWN]
    }
  },
  get stats() {
    return this._stats;
  },
  set stats(finalAnswers) {
    this._stats[userData.name] = {
      life: headerData.lives,
      answers: finalAnswers
    };
  }
};


/**
 * GAME TYPE
 */
export const GameType = Object.freeze({
  ONE_IMAGE: 1,
  TWO_IMAGE: 2,
  THREE_IMAGE: 3
});

export const levelTypes = {
  _levels: [],
  get levelsArray() {
    return this._levels;
  },
  reset() {
    const gameTypeLength = Object.keys(GameType).length;
    this._levels = [...new Array(MAX_LEVELS_AMOUNT)].map(() => Math.floor(1 + Math.random() * gameTypeLength));
  }
};

/**
 * IMAGES
 */
const images = {
  paintings: [
    // People
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://k42.kn3.net/CF42609C8.jpg`,
    // Animals
    `https://k42.kn3.net/D2F0370D6.jpg`,
    `https://k42.kn3.net/D2F0370D6.jpg`,
    `https://k42.kn3.net/D2F0370D6.jpg`,
    `https://k42.kn3.net/D2F0370D6.jpg`,
    // Nature
    `https://k32.kn3.net/5C7060EC5.jpg`,
    `https://k32.kn3.net/5C7060EC5.jpg`,
    `https://k32.kn3.net/5C7060EC5.jpg`,
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    // People
    `http://i.imgur.com/1KegWPz.jpg`,
    `http://i.imgur.com/1KegWPz.jpg`,
    `http://i.imgur.com/1KegWPz.jpg`,
    `http://i.imgur.com/1KegWPz.jpg`,
    // Animals
    `https://i.imgur.com/DiHM5Zb.jpg`,
    `https://i.imgur.com/DiHM5Zb.jpg`,
    `https://i.imgur.com/DiHM5Zb.jpg`,
    `https://i.imgur.com/DiHM5Zb.jpg`,
    // Nature
    `http://i.imgur.com/DKR1HtB.jpg`,
    `http://i.imgur.com/DKR1HtB.jpg`,
    `http://i.imgur.com/DKR1HtB.jpg`,
    `http://i.imgur.com/DKR1HtB.jpg`
  ]
};

export const taskType = {
  _currentTask: 0,
  _taskText: {
    0: `Найдите рисунок среди изображений`,
    1: `Найдите фотографию среди изображений`
  },
  set task(task) {
    this._currentTask = task;
  },
  get task() {
    return this._currentTask;
  },
  get taskText() {
    return this._taskText[this._currentTask];
  }
};

const getOneImage = (task) => {
  const imagesArrayKey = Object.keys(images)[task]; // get object key with taskType
  const randomImageNumber = Math.floor(Math.random() * (images[imagesArrayKey].length)); // get random array number
  return images[imagesArrayKey][randomImageNumber] + `?` + Math.round(Math.random() * 1e9); // return image
};


const randomizeTask = () => Math.round(Math.random());

// TODO: add duplicates check
export const getImages = (amount) => {
  let randomTask = randomizeTask();
  let firstImage;
  let secondImage;
  let thirdImage;
  let returnedValue = [];
  switch (amount) {
    case 1:
      returnedValue = [getOneImage(randomTask), ANSWER_VARIETY[randomTask]];
      break;
    case 2:
      firstImage = [getOneImage(randomTask), ANSWER_VARIETY[randomTask]];
      randomTask = randomizeTask();
      secondImage = [getOneImage(randomTask), ANSWER_VARIETY[randomTask]];
      returnedValue = [firstImage, secondImage];
      break;
    case 3:
      firstImage = [getOneImage(randomTask), ANSWER_VARIETY[randomTask]];
      secondImage = [getOneImage(randomTask), ANSWER_VARIETY[randomTask]];
      randomTask = +!randomTask; // change task
      thirdImage = [getOneImage(randomTask), ANSWER_VARIETY[randomTask]];
      taskType.task = randomTask;
      returnedValue = [firstImage, secondImage, thirdImage];
      // shuffle images
      for (let i = 1; i <= returnedValue.length; i++) {
        let j = Math.floor(Math.random() * i);
        [returnedValue[i - 1], returnedValue[j]] = [returnedValue[j], returnedValue[i - 1]];
      }
      break;
  }
  return returnedValue;
};
