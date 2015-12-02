/**
 * Created by junaid.salaat on 11/27/2015.
 */

import {bootstrap, Component} from 'angular2/angular2'
@Component({
    selector: 'hero-birthday',
    templateUrl: `home.html`
})

export class HeroBirthday {
    birthday = new Date(1988,3,15); // April 15, 1988
    get format() { return this.toggle ? 'shortDate' : 'fullDate'}
    toggle = true;
    toggleFormat() { this.toggle = !this.toggle; }
}

bootstrap(HeroBirthday);