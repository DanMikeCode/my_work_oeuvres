import { r as registerInstance, h, H as Host } from './index-644f5478.js';
import { d as decline } from './mutations-cebd927e.js';
import './fetch-2525e763.js';
import './add-query-args-f4c5962b.js';
import './store-77f83bce.js';
import './utils-00526fde.js';
import './index-1046c77e.js';
import './watchers-64749b6b.js';
import './google-26a2fc26.js';
import './currency-728311ef.js';
import './google-e0fc1ce3.js';
import './util-64ee5262.js';
import './index-b0f661a7.js';
import './mutations-79f42351.js';

const scUpsellNoThanksButtonCss = "sc-upsell-no-thanks-button{display:block}sc-upsell-no-thanks-button p{margin-block-start:0;margin-block-end:1em}sc-upsell-no-thanks-button .wp-block-button__link{position:relative;text-decoration:none}";

const ScUpsellNoThanksButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { onClick: () => decline() }, h("slot", null)));
  }
};
ScUpsellNoThanksButton.style = scUpsellNoThanksButtonCss;

export { ScUpsellNoThanksButton as sc_upsell_no_thanks_button };

//# sourceMappingURL=sc-upsell-no-thanks-button.entry.js.map