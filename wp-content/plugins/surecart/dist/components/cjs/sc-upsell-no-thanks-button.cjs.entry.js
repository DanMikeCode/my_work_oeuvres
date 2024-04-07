'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f1e4d53b.js');
const mutations = require('./mutations-4fa5ddaa.js');
require('./fetch-2dba325c.js');
require('./add-query-args-17c551b6.js');
require('./store-1aade79c.js');
require('./utils-a086ed6e.js');
require('./index-00f0fc21.js');
require('./watchers-1a948af6.js');
require('./google-909eaf44.js');
require('./currency-ba038e2f.js');
require('./google-4d37e025.js');
require('./util-efd68af1.js');
require('./index-13ba9385.js');
require('./mutations-f436c5a9.js');

const scUpsellNoThanksButtonCss = "sc-upsell-no-thanks-button{display:block}sc-upsell-no-thanks-button p{margin-block-start:0;margin-block-end:1em}sc-upsell-no-thanks-button .wp-block-button__link{position:relative;text-decoration:none}";

const ScUpsellNoThanksButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { onClick: () => mutations.decline() }, index.h("slot", null)));
  }
};
ScUpsellNoThanksButton.style = scUpsellNoThanksButtonCss;

exports.sc_upsell_no_thanks_button = ScUpsellNoThanksButton;

//# sourceMappingURL=sc-upsell-no-thanks-button.cjs.entry.js.map