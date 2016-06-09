import { Observable } from 'rxjs/Observable';

import { IOperator } from './operator';

/**
 * Perform a side effect for every emission on the source Observable, but return
 * an Observable that is identical to the source.
 */
export class Do implements IOperator {

    perform(): Observable<any> {
        return Observable.interval(500).take(5)
            .do(data => console.log(data));
    }

    toString(): string {
        return "Do: ";
    }
}
