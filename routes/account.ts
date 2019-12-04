import express, {Router} from "express"

import MAPI from "../lib/miousifyAPI"

export default class AccountRoute{
    ROUTER= Router({mergeParams: true});
    private MIOUSIFY_API: MAPI;

    constructor(){
        this.MIOUSIFY_API=  new MAPI();
        this.setup();
    }

    setup (){
        this.ROUTER.get("/", async function f(req, res) {
            // return user account page
            res.render("")
        })

        this.ROUTER.get("/login", async  (req,res) => {

            res.render("")
        })

        this.ROUTER.post("/login", async (req, res) => {

            interface LoginInteface{
                email: string,
                password: string
            };

            let loginDetails: LoginInteface= req.body;

            let user= this.MIOUSIFY_API.loginCustomer(loginDetails)

            req.session.user= {

            }
            res.redirect("/");
        })

        this.ROUTER.get("/logout", async function f(req, res) {

            req.session.user= undefined
            res.redirect("")

        })

        this.ROUTER.post("/register", async function f(req, res) {
            interface newuserInterface {
                userName:string,
                email: string,
                password: string,
                firstName?: string,
                lastName?: string,
                gender?: string
            }

            let newUser: newuserInterface = req.body;

            let {data}= await this.MIOUSIFY_API.registerNewUser(newUser)

            req.session.user={}
            res.redirect("")
        })

        this.ROUTER.get("/register", async function f(req, res) {

            // return products page
            res.render("signin.html")
        })

    }

    getRouter(){
        return this.ROUTER;
    }
}