import AppIndex from "./routes/index"
import shelljs from "shelljs";

shelljs.cd("./template")

const GENERIC_THEME_NAME= "generic-template"

const DEFAULT_THEME_URL= `https://github.com/miousify/${GENERIC_THEME_NAME}/archive/master.zip`

const DEFUAL_THEME_GIT_URL= `https://github.com/miousify/${GENERIC_THEME_NAME}.git`

shelljs.rm("-rf",GENERIC_THEME_NAME)

shelljs.exec(`git clone ${DEFUAL_THEME_GIT_URL}`)
