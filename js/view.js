/**
 * Created by @iamserj on 28.06.2017.
 */

export default class AbstractView {

  // return a string with markup
  get template() {
    throw new Error(`Abstract method. Must be overriden and return a string with markup.`);
  }

  // add callbacks
  bind() {}

  // create DOM-element: createElement + template getter
  render() {
    return AbstractView.createElement(this.template);
  }

  // element — returns DOM-element of current view: render + bind
  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }

  // createDOMElement.js analogue
  static createElement(templateString) {
    const newDiv = document.createElement(`div`);
    newDiv.innerHTML = templateString;
    return newDiv;
  }

}
