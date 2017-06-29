/**
 * Created by @iamserj on 13.06.2017.
 */

import StatsBlockView from './blockStats-view';

const statsBlock = () => {
  const statsBlockView = new StatsBlockView();
  return statsBlockView.element;
};

export default statsBlock;
