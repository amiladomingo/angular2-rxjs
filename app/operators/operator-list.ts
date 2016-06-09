import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Reduce } from './reduce';
import { Map } from './map';
import { Filter } from './filter';
import { Scan } from './scan';
import { Share } from './share';
import { SelectMany } from './selectMany';
import { Do } from './do';
import { IOperator } from './operator';

@Component({
    selector: 'rxjs',
    templateUrl: 'app/operators/operator-list.html'
})
export class OperatorListComponent {

    pageTitle: string = "operator list";
    operators: IOperator[] = [new Map, new Reduce, new Filter, new Scan, new SelectMany, new Do];

    constructor() {
        // this.operators.forEach(element => {
        //     element.perform().subscribe(data => console.log(element + data));
        // });
        
        // new Map().perform().subscribe(this.log);
        // new Filter().perform().subscribe(this.log);
        // new Reduce().perform().subscribe(this.log);
        // new Scan().perform().subscribe(this.log);
        // let a: Observable<any> = new Share().perform()
        // a.subscribe(this.log);
        // a.subscribe(this.log);
    }
    
    perform(operator: IOperator): void {
        operator.perform().subscribe(this.log);
    }
    
    log(data: any): void {
        console.log(data)
    }
}