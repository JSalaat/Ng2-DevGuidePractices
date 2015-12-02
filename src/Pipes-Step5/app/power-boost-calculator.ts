/**
 * Created by junaid.salaat on 11/27/2015.
 */

import {Component, FORM_DIRECTIVES, bootstrap} from 'angular2/angular2'
import {ExponentialStrengthPipe} from './exponential-strength-pipe'
@Component({
    selector: 'power-boost-calculator',
    template: `
    <h2>Power Boost Calculator</h2>
    <div>Normal power: <input [(ng-model)]="power"></div>
    <div>Boost factor: <input [(ng-model)]="factor"></div>
    <p>
      Super Hero Power: {{power | exponentialStrength: factor}}
    </p>
  `,
    pipes: [ExponentialStrengthPipe],
    directives: [FORM_DIRECTIVES]
})
export class PowerBoostCalculator {
    power = 5;
    factor = 1;
}
bootstrap(PowerBoostCalculator);