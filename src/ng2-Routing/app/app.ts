/**
 * Created by junaid.salaat on 12/3/2015.
 */

import {Component} from "angular2/angular2";
import {Home} from "src/ng2-Routing/app/home.js";
import {AboutUsa} from "src/ng2-Routing/app/aboutus.js";
import {RouteConfig, RouterOutlet, RouterLink} from "angular2/router";

@Component({
    selector: 'app',
    directives : [RouterOutlet, RouterLink],
    template : `
    <div class="container">
      <a [router-link] = "['/Home']">Home</a> | <a [router-link] = "['/AboutUsa']">About Us</a>
      <h1>Index</h1>
      <router-outlet></router-outlet>
    </div>
    `
})

@RouteConfig([
    {path : "/", redirectTo : "/src/ng2-Routing/home"},
    {path : "/src/ng2-Routing/home", as : "Home", component : Home},
    {path : "/src/ng2-Routing/aboutus", as : "AboutUsa", component : AboutUsa}
])


export class App{

}