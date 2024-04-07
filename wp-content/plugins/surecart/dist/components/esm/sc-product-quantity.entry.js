import { r as registerInstance, h, H as Host } from './index-644f5478.js';
import { s as state, b as setProduct } from './watchers-64749b6b.js';
import { g as getMaxStockQuantity } from './quantity-2718ee4f.js';
import './index-1046c77e.js';
import './google-26a2fc26.js';
import './currency-728311ef.js';
import './google-e0fc1ce3.js';
import './utils-00526fde.js';
import './util-64ee5262.js';
import './index-b0f661a7.js';

const scProductQuantityCss = ":host{display:block}";

let id = 0;
const ScProductQuantity = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputId = `sc-quantity-${++id}`;
    this.helpId = `sc-quantity-help-text-${id}`;
    this.labelId = `sc-quantity-label-${id}`;
    this.size = 'medium';
    this.name = undefined;
    this.errors = undefined;
    this.showLabel = true;
    this.label = undefined;
    this.required = false;
    this.help = undefined;
    this.productId = undefined;
  }
  render() {
    var _a, _b, _c, _d, _e;
    const maxStockQuantity = getMaxStockQuantity((_a = state[this.productId]) === null || _a === void 0 ? void 0 : _a.product, (_b = state[this.productId]) === null || _b === void 0 ? void 0 : _b.selectedVariant);
    return (h(Host, null, h("sc-form-control", { exportparts: "label, help-text, form-control", size: this.size, required: this.required, label: this.label, showLabel: this.showLabel, help: this.help, inputId: this.inputId, helpId: this.helpId, labelId: this.labelId, name: this.name }, h("sc-quantity-select", { size: this.size, quantity: Math.max(((_c = state[this.productId].selectedPrice) === null || _c === void 0 ? void 0 : _c.ad_hoc) ? 1 : state[this.productId].quantity, 1), disabled: (_e = (_d = state[this.productId]) === null || _d === void 0 ? void 0 : _d.selectedPrice) === null || _e === void 0 ? void 0 : _e.ad_hoc, onScInput: e => setProduct(this.productId, { quantity: e.detail }), ...(!!maxStockQuantity ? { max: maxStockQuantity } : {}) }))));
  }
};
ScProductQuantity.style = scProductQuantityCss;

export { ScProductQuantity as sc_product_quantity };

//# sourceMappingURL=sc-product-quantity.entry.js.map