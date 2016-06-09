import { Observable } from 'rxjs/Observable';

import { IOperator } from './operator';

/**
 * Projects each source value to an Observable which is merged in the output
 * Observable.
 */
export class SelectMany implements IOperator {

    perform(): Observable<any> {

        return Observable.of('a', 'b', 'c')
            .flatMap(x => Observable.range(1, 5)
                .map(i => x + i)
            );
    }

    toString(): string {
        return "SelectMany: ";
    }
}
