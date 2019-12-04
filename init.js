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
const miousifyAPI_1 = require("./lib/miousifyAPI");
const index_1 = __importDefault(require("./routes/index"));
//import shelljs from "shelljs"
// shelljs.cd("./template");
//
// const GENERIC_THEME_NAME= "generic-template"
//
// const DEFAULT_THEME_URL= `https://github.com/miousify/${GENERIC_THEME_NAME}/archive/master.zip`
//
// const DEFUAL_THEME_GIT_URL= `https://github.com/miousify/${GENERIC_THEME_NAME}.git`
//
// shelljs.rm("-rf",GENERIC_THEME_NAME)
//
// shelljs.exec(`git clone ${DEFUAL_THEME_GIT_URL}`)
function initializeServer() {
    return __awaiter(this, void 0, void 0, function* () {
        let mda = new miousifyAPI_1.MiousifyDataAPI();
        let data = yield mda.getStoreDetails();
        // check if store has theme avaialbel for use and if theme is active;
        // if true,
        // download  custom git theme
        // theme initialize app;
        //start the app
        new index_1.default();
    });
}
initializeServer().then(() => {
    console.log("server loaded");
});
//# sourceMappingURL=init.js.map