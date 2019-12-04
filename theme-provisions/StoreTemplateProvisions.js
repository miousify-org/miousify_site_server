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
const miousifyAPI_1 = require("../lib/miousifyAPI");
const _productBucketInstance = new miousifyAPI_1.ProductBucket();
const _categoryBucketInstance = new miousifyAPI_1.CategoriesBucket();
const _sectionBucketInstance = new miousifyAPI_1.SectionBucket();
const _customerBucketInstance = new miousifyAPI_1.CustomerBucket();
// This class provides data for store templates for use.
class StoreTemplateProvisions {
    // index page specific data
    indexPage(req) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    // products page specific data
    productsPage(req) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    // category page specific data
    categoryPage(req) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    // sections page specific data
    sectionPage(req) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    // cart page specific data
    cartPage(req) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    // context page secific data
    contactPage(req) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    // about page specific data
    aboutPage() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    // used for every other case
    defaultPageData() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getProducts(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            let items = yield _productBucketInstance.getItems(filter);
            return items;
        });
    }
    getProduct(itemID) {
        return __awaiter(this, void 0, void 0, function* () {
            let item = yield _productBucketInstance.getItem(itemID);
            return item;
        });
    }
    getCategories(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            let items = yield _categoryBucketInstance.getItems(filter);
            return items;
        });
    }
    getCategory(itemID) {
        return __awaiter(this, void 0, void 0, function* () {
            let item = yield _categoryBucketInstance.getItem(itemID);
            return item;
        });
    }
    getBrands() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    loginUser() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getAccount() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.StoreTemplateProvisions = StoreTemplateProvisions;
//# sourceMappingURL=StoreTemplateProvisions.js.map