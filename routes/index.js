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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const nunjucks_1 = __importDefault(require("nunjucks"));
const body_parser_1 = __importDefault(require("body-parser"));
const load_json_file_1 = __importDefault(require("load-json-file"));
const helmet_1 = __importDefault(require("helmet"));
const miousifyAPI_1 = __importDefault(require("../lib/miousifyAPI"));
const product_1 = __importDefault(require("./product"));
const account_1 = __importDefault(require("./account"));
const transaction_1 = __importDefault(require("./transaction"));
class MainApp {
    constructor() {
        this.APP = express_1.default();
        const TEMP_THEME_LOCALTION = '/home/joshuajohnson/projects/m-emerald/src';
        // initialize miousify appi for data collection related to this store
        this.MIOUSIFY_API = new miousifyAPI_1.default();
        this.APP_HOME = "/home/joshuajohnson/projects/magnet-store-server";
        this.THEME_PATH = path_1.default.join(this.APP_HOME, "defaultTheme", "/m-emerald");
        this.THEME_PATH = TEMP_THEME_LOCALTION;
        this.init();
    }
    // load data available to store site templates
    initGlobals() {
        return __awaiter(this, void 0, void 0, function* () {
            let uiData = yield load_json_file_1.default(path_1.default.join(this.THEME_PATH, "config", "ui.json"));
            let localData = yield load_json_file_1.default(path_1.default.join(this.THEME_PATH, "locale", "en-us.json"));
            let storeData = yield this.MIOUSIFY_API.getStoreDetails();
            this.nunjucksEnv.addGlobal("_$", {
                ui: uiData,
                // local: localData,
                store: storeData
            });
        });
    }
    setUpConfigurations() {
        return __awaiter(this, void 0, void 0, function* () {
            // setup resources
            // all resources to be use in a website template a send via the resource endpoint
            this.APP.use(["/resource", "/assets"], express_1.default.static(path_1.default.join(this.THEME_PATH, "assets")));
            // this.nunjucksEnv = new nunJunks.Environment(new nunJunks.FileSystemLoader(this.THEME_PATH), {watch: true, autoescape: true, express: this.APP});
            //
            this.nunjucksEnv = nunjucks_1.default.configure(this.THEME_PATH, { express: this.APP, autoescape: true, watch: true });
            yield this.initGlobals();
        });
    }
    setupContinuousAuth() {
        this.APP.use("", (req, res, next) => {
            // get current user session here
            this.nunjucksEnv.addGlobal("user", {});
            next();
        });
    }
    setupPrebuiltMiddlewares() {
        // initialize due middlewares here
        this.APP.use(helmet_1.default());
        this.APP.use(body_parser_1.default.json({}));
        this.APP.use(body_parser_1.default.urlencoded());
    }
    setUpRoutes() {
        // check if user active theme is
        // this.APP.use("/index", function(req, res, next){
        //
        // });
        this.APP.get(["", "/index"], function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                // Check session details here
                res.render("index.html");
            });
        });
        this.APP.use(["/product", "/products"], new product_1.default().getRouter());
        //this.APP.use("/:category", )
        this.APP.use(["/account"], new account_1.default().getRouter());
        this.APP.use(["/cart", "/cart"], new transaction_1.default().getRouter());
        // implement sections in the future
    }
    init() {
        this.setUpConfigurations();
        this.setupPrebuiltMiddlewares();
        this.setUpRoutes();
        this.listen();
    }
    listen() {
        this.APP.listen(4000, function () {
            console.log("Listening on port 4000");
        });
    }
}
exports.default = MainApp;
//# sourceMappingURL=index.js.map