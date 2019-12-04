"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const StoreTemplateProvisions_1 = require("../theme-provisions/StoreTemplateProvisions");
class ProductRoute {
    constructor() {
        this.ROUTER = express_1.Router({ mergeParams: true });
        this.MIOUSIFY_API = new StoreTemplateProvisions_1.StoreTemplateProvisions();
        this.setup();
    }
    setup() {
        this.ROUTER.get("", (req, res) => __awaiter(this, void 0, void 0, function* () {
            let { query } = req;
            let items = this.MIOUSIFY_API.getProducts({});
            // return products page
            res.render("products.html", { products: items });
        }));
        this.ROUTER.get("/:product", (req, res) => __awaiter(this, void 0, void 0, function* () {
            let productName = req.params.product;
            let item = this.MIOUSIFY_API.getProduct(productName);
            // return single product page
            res.render("product.html", { product: item });
        }));
    }
    getRouter() {
        return this.ROUTER;
    }
}
exports.default = ProductRoute;
//# sourceMappingURL=product.js.map