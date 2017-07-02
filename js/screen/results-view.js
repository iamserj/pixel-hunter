/**
 * Created by @iamserj on 30.05.2017.
 */

import AbstractView from '../view';
import {allStats, headerData, AnswerType, ScorePoints} from '../data';


const lifeBonusMarkup = (amount) => `\
  <tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
    <td class="result__extra">${amount}&nbsp;<span class="stats__result stats__result--heart"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">${amount * ScorePoints.LIFE}</td>
  </tr>
`;
const fastBonusMarkup = (amount) => `\
  <tr>
    <td></td>
    <td class="result__extra">Бонус за скорость:</td>
    <td class="result__extra">${amount}&nbsp;<span class="stats__result stats__result--fast"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">${amount * ScorePoints.FAST}</td>
  </tr>
`;
const slowBonusMarkup = (amount) => `\
  <tr>
    <td></td>
    <td class="result__extra">Штраф за медлительность:</td>
    <td class="result__extra">${amount}&nbsp;<span class="stats__result stats__result--slow"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">${amount * ScorePoints.SLOW}</td>
  </tr>
`;

const oneResultMarkup = (num, name, stats, initialScore, bonusLife, bonusFast, bonusSlow, total) => `\
  <table class="result__table">
    <tr>
      <td class="result__number">${num}. ${name}</td>
      <td colspan="2">
        <ul class="stats">
          ${stats}
        </ul>
      </td>
      <td class="result__points">×&nbsp;100</td>
      <td class="result__total">${initialScore}</td>
    </tr>
    ${bonusLife}
    ${bonusFast}
    ${bonusSlow}
    <tr>
      <td colspan="5" class="result__total  result__total--final">${total}</td>
    </tr>
  </table>
`;


const statsMarkup = (header, fewResultsMarkup) => `\
<header class="header">
  <div class="header__back">
    <span class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.png" width="101" height="44">
    </span>
  </div>
</header>
<div class="result">
  <h1>${header.result}</h1>
  ${fewResultsMarkup}
</div>`;


export default class ResultsScreenView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    let fewResultsMarkup = ``;
    const statsLength = Object.keys(allStats.stats).length; // all stats data length

    for (let i = 0; i < statsLength; i++) {
      const statsNumber = i; // position
      const userName = Object.keys(allStats.stats)[i]; // saved name
      const userStats = allStats.stats[userName]; // {lifes, [answers]}

      const getAmountOf = (element) => {
        let indices = [];
        let idx = userStats.answers.indexOf(element);
        while (idx !== -1) {
          indices.push(idx);
          idx = userStats.answers.indexOf(element, idx + 1);
        }
        return indices.length;
      };

      const correctAmount = getAmountOf(AnswerType.CORRECT);
      const fastAmount = getAmountOf(AnswerType.FAST);
      const slowAmount = getAmountOf(AnswerType.SLOW);
      let lifeMarkup = ``;
      let fastMarkup = ``;
      let slowMarkup = ``;

      const initialScore = ScorePoints.CORRECT * (correctAmount + fastAmount + slowAmount);
      let totalScore;
      if (userStats.life > 0) {
        lifeMarkup = lifeBonusMarkup(userStats.life);
        if (fastAmount > 0) {
          fastMarkup = fastBonusMarkup(fastAmount);
        }
        if (slowAmount > 0) {
          slowMarkup = slowBonusMarkup(slowAmount);
        }
        const timeBonusScore = fastAmount * ScorePoints.FAST + slowAmount * ScorePoints.SLOW;
        totalScore = initialScore + timeBonusScore + ScorePoints.LIFE * userStats.life;
      } else {
        totalScore = ScorePoints.FAIL;
      }

      fewResultsMarkup += oneResultMarkup(statsNumber, userName, userStats.answers, initialScore, lifeMarkup, fastMarkup, slowMarkup, totalScore);
    }

    return statsMarkup(headerData, fewResultsMarkup);
  }

  bind() {
    const backButton = this.element.querySelector(`.header__back`);

    const backButtonClick = (event) => {
      event.preventDefault();
      this.backButtonHandler();
    };

    backButton.addEventListener(`click`, backButtonClick);
  }

  backButtonHandler() {}
}
