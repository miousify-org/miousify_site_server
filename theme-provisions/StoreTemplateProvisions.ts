import {ProductBucket, CustomerBucket, SectionBucket, CategoriesBucket} from "../lib/miousifyAPI";

const _productBucketInstance = new ProductBucket();
const _categoryBucketInstance = new CategoriesBucket();
const _sectionBucketInstance= new SectionBucket();
const _customerBucketInstance = new CustomerBucket();

// This class provides data for store templates for use.
export class StoreTemplateProvisions{

    // index page specific data
    async indexPage(req){

    }

    // products page specific data
    async productsPage(req){

    }

    // category page specific data
    async categoryPage(req){

    }

    // sections page specific data
    async sectionPage(req){

    }

    // cart page specific data
    async cartPage(req){

    }

    // context page secific data
    async contactPage (req){

    }


    // about page specific data
    async aboutPage (){

    }

    // used for every other case
    async defaultPageData (){

    }

    async getProducts (filter){
       let items =  await _productBucketInstance.getItems(filter);
       return items;
    }
    async getProduct (itemID){
        let item =  await _productBucketInstance.getItem(itemID);
        return item;
    }

    async getCategories (filter){
        let items =  await _categoryBucketInstance.getItems(filter);
        return items;
    }

    async getCategory (itemID){
        let item =  await _categoryBucketInstance.getItem(itemID);
        return item;
    }

    async getBrands(){

    }

    async loginUser(){

    }

    async  getAccount(){

    }

}




