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
// TODO: generate levels here
export const gameLevels = [2, 1, 3];


/**
 * GAME STATS
 */
export const statsData = {
  _stats: [],
  get stats() {
    return this._stats;
  },
  set stats(answer) {
    this._stats[currentLevel] = answer;
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


/**
 * IMAGES
 */
export const images = {
  paintings: [
    // People
    `https://k42.kn3.net/CF42609C8.jpg`,

    // Animals
    `https://k42.kn3.net/D2F0370D6.jpg`,

    // Nature
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    // People
    `http://i.imgur.com/1KegWPz.jpg`,

    // Animals
    `https://i.imgur.com/DiHM5Zb.jpg`,

    // Nature
    `http://i.imgur.com/DKR1HtB.jpg`
  ]
};
