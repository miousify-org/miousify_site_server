import {MiousifyDataAPI} from "./lib/miousifyAPI";
import AppIndex from "./routes/index"


async  function initializeServer(){
    let mda= new MiousifyDataAPI();

    let data = await mda.getStoreDetails();

    // check if store has theme avaialbel for use and if theme is active;
    // if true,
    // download  custom git theme

    // theme initialize app;
    //start the app

    new AppIndex();
}

initializeServer().then(()=>{
});