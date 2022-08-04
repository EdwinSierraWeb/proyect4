import All from "./modules/all.js";

export default class App{
    constructor(){
        this.all = new All();
    }

    load(){
        this.all.setcalculator();
    }
}