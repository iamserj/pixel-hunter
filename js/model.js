/**
 * Created by soniko on 12.06.2017.
 */


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
  set data(nextAnswer) {
    this._userAnswers[currentLevel.levelNumber] = nextAnswer;
  },
  reset() {
    this._userAnswers = (new Array(10)).fill(AnswerType.UNKNOWN);
  }
};


/**
 * GAME HEADER
 */
export const headerData = {
  _headerTime: 0,
  _headerLives: 0,
  reset() {
    this._headerTime = 30;
    this._headerLives = 3;
  },
  set time(time) {
    this._headerTime = time;
  },
  get time() {
    return this._headerTime;
  },
  set lives(lives) {
    this._headerLives = lives;
  },
  get lives() {
    return this._headerLives;
  }
};


/**
 * GAME TYPE
 */
export const gameType = Object.freeze({
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
    const gameTypeLength = Object.keys(gameType).length;
    this._levels = [...new Array(10)].map(() => Math.floor(1 + Math.random() * gameTypeLength));
  }
};


/**
 * GAME STATS
 */
export const statsData = {
  _stats: [],
  get stats() {
    return this._stats;
  },
  set stats(answer) {
    this._stats = answer;
  },
  reset() {
    this._stats = (new Array(10)).fill(AnswerType.UNKNOWN);
  }
};


/**
 * LAST SCREEN STATS
 */
export const result = {
  win: `Победа!`,
  lose: `Не победа!`
};

export const score = {
  UNKNOWN: 0,
  CORRECT: 100,
  WRONG: 0,
  FAST: 150,
  SLOW: 50,
  NOMISTAKES: 50
};

export const allStats = {
  _stats: {
    name1: [],
    name2: [],
    name3: []
  },
  get stats() {
    return this._stats;
  },
  set stats(finalAnswers) {
    this._stats[userData.name] = finalAnswers;
  }
};


/**
 * IMAGES
 */
// TODO: add normal photos/images
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

// TODO: add task to markup
export const taskType = {
  0: `Найдите рисунок среди фотографий`,
  1: `Найдите фотографию среди рисунков`
};

const getOneImage = (task) => {
  const imagesArrayKey = Object.keys(images)[task]; // get object key with taskType
  const randomImageNumber = Math.floor(Math.random() * (images[imagesArrayKey].length)); // get random array number
  return images[imagesArrayKey][randomImageNumber]; // return image
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
      returnedValue = [getOneImage(randomTask), randomTask];
      break;
    case 2:
      firstImage = [getOneImage(randomTask), randomTask];
      randomTask = randomizeTask();
      secondImage = [getOneImage(randomTask), randomTask];
      returnedValue = [firstImage, secondImage];
      break;
    case 3:
      firstImage = [getOneImage(randomTask), randomTask];
      secondImage = [getOneImage(randomTask), randomTask];
      randomTask = +!randomTask; // change task
      thirdImage = [getOneImage(randomTask), randomTask];
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