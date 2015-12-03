/**
 * Created by junaid.salaat on 12/3/2015.
 */
import {Component,View,CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/angular2";

@Component({
    selector : "AboutUs"
})

@View({
    templateUrl : "./src/ng2-Routing/templates/aboutUs.html",
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class AboutUsa{
    model = new About('Dr IQ', 'ChuckOverstreet@ss.com', 3336944);
    submitted = false;
    onSubmit(form) { this.submitted = true; console.log(form) }
}

export class About{
    constructor(
        public name: string,
        public email: string,
        public phoneNo?: number
    ) {  }

}