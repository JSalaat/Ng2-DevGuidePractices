/**
 * Created by junaid.salaat on 11/27/2015.
 */
import {bootstrap, Component,
    CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2'
import {FetchJsonPipe} from './fetch-json-pipe'
@Component({
    selector: 'hero-list',
    template: `
    <div class="container">
    <h4>Heroes from JSON File</h4>
    <div *ng-for="#hero of ('heroes.json' | fetch) ">
      {{hero.name}}
    </div>
    <p>Heroes as JSON:
    {{'heroes.json' | fetch | json}}
    </p>
    </div>
  `,
    directives:[CORE_DIRECTIVES],
    pipes: [FetchJsonPipe]
})
export class HeroListComponent {
    /* I've got nothing to do ;-) */
}
bootstrap(HeroListComponent);