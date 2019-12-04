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
const express_1 = require("express");
const miousifyAPI_1 = __importDefault(require("../lib/miousifyAPI"));
class TransactionRoute {
    constructor() {
        this.ROUTER = express_1.Router({ mergeParams: true });
        this.MIOUSIFY_API = new miousifyAPI_1.default();
        this.setup();
    }
    setup() {
        // list all items for currently logged in user in cart
        this.ROUTER.get("/", function f(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                // return cart page
                res.render("");
            });
        });
        // purchase items in cart
        this.ROUTER.get(["/purchase"], function f(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
            });
        });
        // delete item in cart
        this.ROUTER.delete([""], function f(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                // item id must be provided
            });
        });
        // save item in cart
        this.ROUTER.post(["/add"], function f(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                // check for session
            });
        });
        // send atomic purchase
        this.ROUTER.post("/", function f(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                // no user session required here,
                // purchase can be made if request contains details
            });
        });
    }
    getRouter() {
        return this.ROUTER;
    }
}
exports.default = TransactionRoute;
//# sourceMappingURL=transaction.js.map