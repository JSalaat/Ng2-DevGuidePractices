/**
 * Created by junaid.salaat on 12/3/2015.
 */
import {Component, View} from "angular2/angular2"

@Component({
    selector : "home"
})

@View({
    templateUrl : "./src/ng2-Routing/templates/home.html"
})

export class Home{
    public dNumber:number = 1;
    constructor(){
        this.getNewDiceNumber();
    }


    public getNewDiceNumber():void {
        this.dNumber = parseInt(Math.random() * 6 + 1);
    }
}