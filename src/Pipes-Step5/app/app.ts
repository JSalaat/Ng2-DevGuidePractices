import {Component, bootstrap} from 'angular2/angular2'
import {ExponentialStrengthPipe} from './exponential-strength-pipe'
@Component({
    selector: 'power-booster',
    template: `
    <div class="container"><h2>Power Booster</h2>
    <p>
      Super power boost: {{2 | exponentialStrength: 10}}
    </p></div>
  `,
    pipes: [ExponentialStrengthPipe]
})
export class PowerBooster { }

bootstrap(PowerBooster);