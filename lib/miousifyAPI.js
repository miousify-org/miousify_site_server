"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
let STORE_ID = process.env.STORE_ID || "5dc2ce6f9434ab34c6b4ce72";
let MIOUSIFY_REST_API = process.env.MIOUSIFY_REST_API || `http://localhost:5000`;
const APIAxiousInstance = axios_1.default.create({
    baseURL: `${MIOUSIFY_REST_API}/api/store/${STORE_ID}`,
    headers: {},
    timeout: 20000
});
class API {
    constructor() {
        this.getStoreDetails = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let getResponse = yield this.axiosInstance.get();
                return getResponse.data;
            }
            catch (e) {
                console.log(e);
            }
        });
        this.removeProductFromCart = () => {
        };
        this.purchaseItemsInCart = () => __awaiter(this, void 0, void 0, function* () {
            let { data } = yield this.axiosInstance.get("");
            if (data) {
            }
        });
        this.axiosInstance = APIAxiousInstance;
        return this;
    }
    initializeCustomerTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { data } = yield this.axiosInstance.post("transaction", {});
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    emptyCart() {
        return __awaiter(this, void 0, void 0, function* () {
            let { data } = yield this.axiosInstance.delete("");
            if (data) {
            }
        });
    }
    addProductToCart() {
        return __awaiter(this, void 0, void 0, function* () {
            let { data } = yield this.axiosInstance.post(`/user/cart`);
            if (data) {
            }
        });
    }
    addExistingMiousifyUser() {
        return __awaiter(this, void 0, void 0, function* () {
            let { data } = yield this.axiosInstance.post(`/customer`);
            if (data) {
            }
        });
    }
    registerNewUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let { data } = yield this.axiosInstance.post(`/user`);
            if (data) {
                return data;
            }
        });
    }
    loginCustomer(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            let { data } = yield this.axiosInstance.post(`/user/login`);
            if (!data) {
                return false;
            }
            return data;
        });
    }
}
exports.default = API;
class GenericBucketAccessor {
    constructor(bucketName) {
        this.bucket = bucketName;
        this.axiosInstance = APIAxiousInstance;
        return this;
    }
    getItems(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            let data;
            try {
                const getResponse = yield this.axiosInstance.get(`/${this.bucket}`);
                data = getResponse.data;
                return data;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getItem(itemID) {
        return __awaiter(this, void 0, void 0, function* () {
            let data;
            try {
                const getResponse = yield this.axiosInstance.get(`/${this.bucket}/${itemID}`);
                data = getResponse.data;
                return data;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
class ProductBucket extends GenericBucketAccessor {
    constructor() {
        super("product");
    }
}
exports.ProductBucket = ProductBucket;
class CategoriesBucket extends GenericBucketAccessor {
    constructor() {
        super("category");
    }
}
exports.CategoriesBucket = CategoriesBucket;
class CustomerBucket extends GenericBucketAccessor {
    constructor() {
        super("customer");
    }
}
exports.CustomerBucket = CustomerBucket;
class SectionBucket extends GenericBucketAccessor {
    constructor() {
        super("section");
    }
}
exports.SectionBucket = SectionBucket;
exports.MiousifyDataAPI = API;
//# sourceMappingURL=miousifyAPI.js.map