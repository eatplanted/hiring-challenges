import "reflect-metadata";
import {createConnection} from "typeorm";

createConnection().then(async connection => {

    console.log("Load all entities...");
    

}).catch(error => console.log(error));
