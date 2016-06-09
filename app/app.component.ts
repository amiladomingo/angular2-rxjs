import { Component, provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';
import { ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { OperatorListComponent } from './operators/operator-list';
import { Observable } from './observer/observable';

@Component({
    selector: 'my-app',
    template: `<div>
                    <rxjs></rxjs>
                    <observable></observable>
               </div>`,
    directives: [ROUTER_DIRECTIVES, OperatorListComponent, Observable],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
export class AppComponent { }