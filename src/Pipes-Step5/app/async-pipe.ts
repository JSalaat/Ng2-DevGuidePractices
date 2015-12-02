/**
 * Created by junaid.salaat on 11/27/2015.
 */
import {Component, FORM_DIRECTIVES, bootstrap} from 'angular2/angular2'
@Component({
    selector: 'my-hero',
    template: 'Message: {{delayedMessage | async}}',
})
class MyHeroAsyncMessageComponent {
    delayedMessage:Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => resolve('You are my Hero!'), 500);
    });
}
bootstrap(MyHeroAsyncMessageComponent);