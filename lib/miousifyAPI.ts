import axios from "axios";

interface CartItemInterface {
    productName: string,
    productId: string,
    productPrice: string
}

interface userLoginInterface {
    email: string,
    password: string
}

interface newuserInterface {
    userName:string,
    email: string,
    password: string,
    firstName?: string,
    lastName?: string,
    gender?: string
}

interface miousifyUser {
    email: string
}

interface MAPIInterface {
    addProductToCart(product: CartItemInterface),
    removeProductFromCart(itemID: number),
    emptyCart(),
    purchaseItemsInCart(),
    loginCustomer(details: userLoginInterface),
    registerNewUser(details: newuserInterface),
    addExistingMiousifyUser(details: miousifyUser),
}

let STORE_ID = process.env.STORE_ID  || "5dc2ce6f9434ab34c6b4ce72";

let MIOUSIFY_REST_API= process.env.MIOUSIFY_REST_API  || `http://localhost:5000`;

const APIAxiousInstance = axios.create({
    baseURL:`${MIOUSIFY_REST_API}/api/store/${STORE_ID}`,
    headers:{

    },
    timeout: 20000
});

export default class API implements MAPIInterface{
    axiosInstance;
    constructor(){
        this.axiosInstance  =  APIAxiousInstance;
        return this;
    }

    public getStoreDetails = async () => {
        try {
            let getResponse= await this.axiosInstance.get();
            return getResponse.data;
        }catch (e) {
            console.log(e)
        }
    };

    removeProductFromCart = () => {
    };

    purchaseItemsInCart = async () => {
        let {data} = await this.axiosInstance.get("");
        if(data){

        }
    };

    async initializeCustomerTransactions(){
        try{
            let {data}= await this.axiosInstance.post("transaction", {

            });
        }catch (e) {
            console.log(e)
        }

    }

    async emptyCart() {
        let {data} = await this.axiosInstance.delete("");
        if(data){

        }
    }
    async addProductToCart() {

        let {data} = await this.axiosInstance.post(`/user/cart`);
        if(data){

        }
    }
    async addExistingMiousifyUser() {

        let {data} = await this.axiosInstance.post(`/customer`);
        if(data){

        }

    }
    async  registerNewUser(user: newuserInterface) {

        let {data} = await this.axiosInstance.post(`/user`);
        if(data){
            return data
        }

    }

    async loginCustomer(customer: userLoginInterface): Promise<any> {

        let {data}= await this.axiosInstance.post(`/user/login`)
        if(!data){
            return false
        }
        return data

    }
}

abstract class GenericBucketAccessor {
    axiosInstance;
    bucket: String;
    constructor(bucketName){
        this.bucket= bucketName;
        this.axiosInstance  = APIAxiousInstance;
        return this;
    }
     async  getItems(filter){
       let data;
       try{
          const  getResponse = await  this.axiosInstance.get(`/${this.bucket}`);
          data= getResponse.data;
          return data;
       }catch (e) {
           console.log(e);
       }
    }

    async  getItem(itemID: String){
        let data;
        try{
            const  getResponse = await  this.axiosInstance.get(`/${this.bucket}/${itemID}`);
            data= getResponse.data;
            return data;
        }catch (e) {
            console.log(e);
        }
    }
}

export class ProductBucket extends GenericBucketAccessor{
    constructor(){
        super("product");
    }
}
export class CategoriesBucket extends GenericBucketAccessor{
    constructor(){
        super("category");
    }
}
export class CustomerBucket extends GenericBucketAccessor{
    constructor(){
        super("customer");
    }
}
export class SectionBucket extends GenericBucketAccessor{
    constructor(){
        super("section");
    }
}


export  const MiousifyDataAPI= API;