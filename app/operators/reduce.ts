import { Observable } from 'rxjs/Observable';

import { IOperator } from './operator';

/**
 * Returns an Observable that applies a specified accumulator function to the first item emitted by a source Observable,
 * then feeds the result of that function along with the second item emitted by the source Observable into the same
 * function, and so on until all items have been emitted by the source Observable, and emits the final result from
 * the final call to your function as its sole item.
 */
export class Reduce implements IOperator {

    perform(): Observable<any> {
        return Observable.interval(500).take(5)
            .map(i => i * 2)
            .reduce((state, value) => {
                console.log(state + " " + value) 
                return state + value
            }, 0)
    }

    toString(): string {
        return "Reduce: ";
    }
}