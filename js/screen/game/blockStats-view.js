/**
 * Created by @iamserj on 13.06.2017.
 */

import AbstractView from '../../view';
import {answers} from '../../data';

const statsMarkup = (state) => `\
<div class="stats">
  <ul class="stats">
    ${state.join(`\n`)}
  </ul>
</div>`;

export default class StatsBlockView extends AbstractView {
  /*constructor() {
    super();
  }*/

  get template() {
    return statsMarkup(answers.data);
  }
}

