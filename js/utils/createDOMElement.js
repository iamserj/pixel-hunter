/**
 * Created by soniko on 30.05.2017.
 */

const createElement = (templateString) => {
  const createdDiv = document.createElement(`div`);
  createdDiv.innerHTML = templateString;
  return createdDiv;
};

export default createElement;
