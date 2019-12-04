import express, {Router} from "express"
import {StoreTemplateProvisions} from "../theme-provisions/StoreTemplateProvisions";


export default class ProductRoute{

    ROUTER= Router({mergeParams: true});
    MIOUSIFY_API;
    constructor(){
        this.MIOUSIFY_API=  new StoreTemplateProvisions();
        this.setup();
    }

    setup (){
        this.ROUTER.get("", async (req, res)=> {
            let {query}= req;
            let items = this.MIOUSIFY_API.getProducts({});
            // return products page
            res.render("products.html", {products: items})
        })

        this.ROUTER.get("/:product", async  (req, res) =>{
            let productName = req.params.product
            let item = this.MIOUSIFY_API.getProduct(productName);
            // return single product page
            res.render("product.html", {product: item})
        });

    }

    getRouter(){
        return this.ROUTER;
    }
}