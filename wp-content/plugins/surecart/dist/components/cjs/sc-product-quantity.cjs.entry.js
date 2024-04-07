'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f1e4d53b.js');
const watchers = require('./watchers-1a948af6.js');
const quantity = require('./quantity-993ab1ec.js');
require('./index-00f0fc21.js');
require('./google-909eaf44.js');
require('./currency-ba038e2f.js');
require('./google-4d37e025.js');
require('./utils-a086ed6e.js');
require('./util-efd68af1.js');
require('./index-13ba9385.js');

const scProductQuantityCss = ":host{display:block}";

let id = 0;
const ScProductQuantity = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    const maxStockQuantity = quantity.getMaxStockQuantity((_a = watchers.state[this.productId]) === null || _a === void 0 ? void 0 : _a.product, (_b = watchers.state[this.productId]) === null || _b === void 0 ? void 0 : _b.selectedVariant);
    return (index.h(index.Host, null, index.h("sc-form-control", { exportparts: "label, help-text, form-control", size: this.size, required: this.required, label: this.label, showLabel: this.showLabel, help: this.help, inputId: this.inputId, helpId: this.helpId, labelId: this.labelId, name: this.name }, index.h("sc-quantity-select", { size: this.size, quantity: Math.max(((_c = watchers.state[this.productId].selectedPrice) === null || _c === void 0 ? void 0 : _c.ad_hoc) ? 1 : watchers.state[this.productId].quantity, 1), disabled: (_e = (_d = watchers.state[this.productId]) === null || _d === void 0 ? void 0 : _d.selectedPrice) === null || _e === void 0 ? void 0 : _e.ad_hoc, onScInput: e => watchers.setProduct(this.productId, { quantity: e.detail }), ...(!!maxStockQuantity ? { max: maxStockQuantity } : {}) }))));
  }
};
ScProductQuantity.style = scProductQuantityCss;

exports.sc_product_quantity = ScProductQuantity;

//# sourceMappingURL=sc-product-quantity.cjs.entry.js.map