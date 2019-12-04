import express from "express";
import path from "path"
import nunJunks from "nunjucks";
import bodyParser from "body-parser";
import expressSession from "express-session";

import loadJsonFile from "load-json-file"
import helmet from "helmet"
import MAPI from "../lib/miousifyAPI"

/*Get App Routers here
* */
import account from "./account";

import ProductRoute from "./product";
import AccountRoute from "./account";
import TransactionRoute from "./transaction";

export default  class MainApp {
    APP= express();
    THEME_PATH: string;
    APP_HOME: string;
    nunjucksEnv;
    nunjucksInstance;
    private MIOUSIFY_API: MAPI;

    constructor(){

        const TEMP_THEME_LOCALTION= '/home/joshuajohnson/projects/m-emerald/src';

        // initialize miousify appi for data collection related to this store
        this.MIOUSIFY_API=  new MAPI();

        this.APP_HOME= "/home/joshuajohnson/projects/magnet-store-server";

        this.THEME_PATH=path.join(this.APP_HOME, "defaultTheme", "/m-emerald");

        this.THEME_PATH= TEMP_THEME_LOCALTION;

        this.init();
    }

    // load data available to store site templates
    private  async initGlobals (){
        let uiData= await loadJsonFile(path.join(this.THEME_PATH, "config", "ui.json"));
        let localData= await loadJsonFile(path.join(this.THEME_PATH, "locale", "en-us.json"));
        let storeData= await this.MIOUSIFY_API.getStoreDetails()
        this.nunjucksEnv.addGlobal("_$",{
            ui: uiData,
            // local: localData,
            store: storeData
        });
    }

    private async setUpConfigurations(){
        // setup resources
        // all resources to be use in a website template a send via the resource endpoint
        this.APP.use(["/resource","/assets"], express.static(path.join(this.THEME_PATH, "assets")));

        // this.nunjucksEnv = new nunJunks.Environment(new nunJunks.FileSystemLoader(this.THEME_PATH), {watch: true, autoescape: true, express: this.APP});
        //

        this.nunjucksEnv= nunJunks.configure(this.THEME_PATH, {express: this.APP, autoescape: true, watch: true});

        await this.initGlobals();

    }

    private setupContinuousAuth (){
        this.APP.use("",  (req, res, next) => {
            // get current user session here
            this.nunjucksEnv.addGlobal("user", {});
            next()
        })
    }

    private setupPrebuiltMiddlewares(){
        // initialize due middlewares here
        this.APP.use(helmet())
        this.APP.use(bodyParser.json({ }))
        this.APP.use(bodyParser.urlencoded())
    }

    private setUpRoutes (){

        // check if user active theme is
        // this.APP.use("/index", function(req, res, next){
        //
        // });

        this.APP.get(["","/index"],async function (req, res) {
            // Check session details here
            res.render("index.html")
        });

        this.APP.use(["/product", "/products"],new ProductRoute().getRouter());
        //this.APP.use("/:category", )
        this.APP.use(["/account"],new AccountRoute().getRouter());

        this.APP.use(["/cart", "/cart"],new TransactionRoute().getRouter());

        // implement sections in the future

    }

    private init(){
        this.setUpConfigurations()
        this.setupPrebuiltMiddlewares()
        this.setUpRoutes()
        this.listen()
    }

    private listen(){
        this.APP.listen(4000,function () {
            console.log("Listening on port 4000")
        })
    }

}