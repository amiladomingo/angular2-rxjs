import { Observable } from 'rxjs/Observable';

import { IOperator } from './operator';

/**
 * Filter items emitted by the source Observable by only emitting those that
 * satisfy a specified predicate.
 */
export class Filter implements IOperator {

    perform(): Observable<any> {
        return Observable.interval(500).take(5)
            .filter(i => i % 2 == 0);
    }

    toString(): string {
        return "Filter: ";
    }
}