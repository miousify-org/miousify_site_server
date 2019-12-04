import express, {Router} from "express"
import MAPI from "../lib/miousifyAPI"

export default class TransactionRoute{
    ROUTER= Router({mergeParams: true});
    private MIOUSIFY_API: MAPI;
    constructor(){
        this.MIOUSIFY_API=  new MAPI();
        this.setup();
    }

    setup (){
        // list all items for currently logged in user in cart
        this.ROUTER.get("/", async function f(req, res) {
            // return cart page
            res.render("")
        })

        // purchase items in cart
        this.ROUTER.get(["/purchase"], async function f(req, res) {

        })

        // delete item in cart
        this.ROUTER.delete([""], async function f(req, res) {
            // item id must be provided
        })

        // save item in cart
        this.ROUTER.post(["/add"], async function f(req, res) {
            // check for session

        })

        // send atomic purchase
        this.ROUTER.post("/", async function f(req, res) {
            // no user session required here,
            // purchase can be made if request contains details
        })
    }

    getRouter(){
        return this.ROUTER;
    }
}