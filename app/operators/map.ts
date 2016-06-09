import { Observable } from 'rxjs/Observable';

import { IOperator } from './operator';

/**
 * Applies a given `project` function to each value emitted by the source
 * Observable, and emits the resulting values as an Observable.
 */
export class Map implements IOperator {

    perform(): Observable<any> {
        return Observable.interval(500).take(5)
            .map(i => 2 * i);
    }

    toString(): string {
        return "Map: ";
    }
}
