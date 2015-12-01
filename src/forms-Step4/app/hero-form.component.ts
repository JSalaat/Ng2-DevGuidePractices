/**
 * Created by junaid.salaat on 11/27/2015.
 */

import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import { Hero } from './hero';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/hero-form.component.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit(form) { this.submitted = true;console.log(form) }
    get diagnostic() { return JSON.stringify(this.model); }
}

let myHero = new Hero(42, 'SkyDog', 'Fetch any object at any distance', 'Leslie Rollover');
console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"