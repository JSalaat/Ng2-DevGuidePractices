/**
 * Created by junaid.salaat on 11/24/2015.
 */
import {bootstrap, Component, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'my-app',
    templateUrl: 'home.html',
    directives: [CORE_DIRECTIVES]
})
class AppComponent{
    heroes=['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    addHero(newHero) {
        if (newHero.value) {
            this.heroes.push(newHero.value);
            newHero.value = null; // clear the newHero textbox
        }
    }

    valuesV3='';
    valuesV2='';
    onKeyV2(value) {
        this.valuesV2 += value + ' | ';
    }

    values='';
    onKey(event) {
        this.values += event.target.value + ' | ';
    }

    onClickMe(){
        alert('You are my hero!')
    }

}

bootstrap(AppComponent);
