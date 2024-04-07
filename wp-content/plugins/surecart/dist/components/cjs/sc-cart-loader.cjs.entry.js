'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f1e4d53b.js');
const mutations = require('./mutations-7ca70da7.js');
require('./index-00f0fc21.js');
require('./utils-a086ed6e.js');
require('./get-query-arg-53bf21e2.js');
require('./add-query-args-17c551b6.js');
require('./index-13ba9385.js');
require('./google-4d37e025.js');
require('./currency-ba038e2f.js');
require('./price-f9faf5f1.js');

const scCartLoaderCss = ":host{position:absolute;z-index:var(--sc-cart-z-index, 999999);font-family:var(--sc-font-sans)}";

const ScCartLoader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.template = undefined;
  }
  render() {
    var _a;
    // check for forms.
    if (document.querySelector('sc-checkout')) {
      return;
    }
    // clear the order if it's already paid.
    if (((_a = mutations.state === null || mutations.state === void 0 ? void 0 : mutations.state.checkout) === null || _a === void 0 ? void 0 : _a.status) === 'paid') {
      mutations.state.checkout = null;
      return null;
    }
    // return the loader.
    return index.h("div", { innerHTML: this.template || '' });
  }
};
ScCartLoader.style = scCartLoaderCss;

exports.sc_cart_loader = ScCartLoader;

//# sourceMappingURL=sc-cart-loader.cjs.entry.js.map