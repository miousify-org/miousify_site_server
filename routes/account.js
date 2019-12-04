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
class AccountRoute {
    constructor() {
        this.ROUTER = express_1.Router({ mergeParams: true });
        this.MIOUSIFY_API = new miousifyAPI_1.default();
        this.setup();
    }
    setup() {
        this.ROUTER.get("/", function f(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                // return user account page
                res.render("");
            });
        });
        this.ROUTER.get("/login", (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.render("");
        }));
        this.ROUTER.post("/login", (req, res) => __awaiter(this, void 0, void 0, function* () {
            ;
            let loginDetails = req.body;
            let user = this.MIOUSIFY_API.loginCustomer(loginDetails);
            req.session.user = {};
            res.redirect("/");
        }));
        this.ROUTER.get("/logout", function f(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                req.session.user = undefined;
                res.redirect("");
            });
        });
        this.ROUTER.post("/register", function f(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                let newUser = req.body;
                let { data } = yield this.MIOUSIFY_API.registerNewUser(newUser);
                req.session.user = {};
                res.redirect("");
            });
        });
        this.ROUTER.get("/register", function f(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                // return products page
                res.render("signin.html");
            });
        });
    }
    getRouter() {
        return this.ROUTER;
    }
}
exports.default = AccountRoute;
//# sourceMappingURL=account.js.map