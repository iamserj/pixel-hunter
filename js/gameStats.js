/**
 * Created by @iamserj on 13.06.2017.
 */

import createElement from './createDOMElement';

const statsMarkup = (state) => `\
<div class="stats">
  <ul class="stats">
    ${state.join(`\n`)}
  </ul>
</div>`;

export const statsWithState = (state) => {
  let statsBlock = createElement(statsMarkup(state));
  return statsBlock;
};
