import { r as registerInstance, h, a as getElement, H as Host } from './index-644f5478.js';
import { i as isInRange } from './util-64ee5262.js';
import { s as state, c as getInRangeAmounts, u as updateDonationState } from './watchers-933b5b59.js';
import './index-1046c77e.js';
import './utils-00526fde.js';
import './getters-4160b3dd.js';
import './mutations-de1b4429.js';
import './get-query-arg-cb6b8763.js';
import './add-query-args-f4c5962b.js';
import './index-b0f661a7.js';
import './google-e0fc1ce3.js';
import './currency-728311ef.js';
import './price-2fe210a6.js';
import './mutations-ccac0bc6.js';
import './mutations-d4ef7000.js';
import './store-dde63d4d.js';
import './mutations-79f42351.js';
import './index-39b714d4.js';
import './fetch-2525e763.js';

const scProductDonationAmountChoiceCss = "";

const ScProductDonationAmountChoice = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.productId = undefined;
    this.value = undefined;
    this.label = undefined;
  }
  state() {
    return state[this.productId];
  }
  render() {
    var _a;
    const amounts = getInRangeAmounts(this.productId);
    const order = amounts.indexOf(this.value);
    if (!isInRange(this.value, this.state().selectedPrice) || order < 0)
      return h(Host, { style: { display: 'none' } });
    return (h("sc-choice-container", { "show-control": "false", checked: this.state().ad_hoc_amount === this.value, onScChange: () => updateDonationState(this.productId, { ad_hoc_amount: this.value, custom_amount: null }), "aria-label": wp.i18n.sprintf(wp.i18n.__('%s of %s', 'surecart'), order + 1, amounts.length), role: "button" }, this.label ? (this.label) : (h("sc-format-number", { type: "currency", currency: (_a = this.state().selectedPrice) === null || _a === void 0 ? void 0 : _a.currency, value: this.value, "minimum-fraction-digits": "0" }))));
  }
  get el() { return getElement(this); }
};
ScProductDonationAmountChoice.style = scProductDonationAmountChoiceCss;

export { ScProductDonationAmountChoice as sc_product_donation_amount_choice };

//# sourceMappingURL=sc-product-donation-amount-choice.entry.js.map