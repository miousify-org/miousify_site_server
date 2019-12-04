"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = __importDefault(require("shelljs"));
shelljs_1.default.cd("./template");
const GENERIC_THEME_NAME = "generic-template";
const DEFAULT_THEME_URL = `https://github.com/miousify/${GENERIC_THEME_NAME}/archive/master.zip`;
const DEFUAL_THEME_GIT_URL = `https://github.com/miousify/${GENERIC_THEME_NAME}.git`;
shelljs_1.default.rm("-rf", GENERIC_THEME_NAME);
shelljs_1.default.exec(`git clone ${DEFUAL_THEME_GIT_URL}`);
//# sourceMappingURL=onBuild.js.map