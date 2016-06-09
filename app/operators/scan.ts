import { Observable } from 'rxjs/Observable';

import { IOperator } from './operator';

/**
 * Applies an accumulation function over the source Observable, and returns each
 * intermediate result, with an optional seed value.
 */
export class Scan implements IOperator {

    perform(): Observable<any> {
        return Observable.interval(500).take(5)
            .scan((state, value) => state + value, 0);
    }

    toString(): string {
        return "Scan: ";
    }
}
