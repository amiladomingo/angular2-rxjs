import { Observable } from 'rxjs/Observable';

import { IOperator } from './operator';

/**
 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
 */
export class Share implements IOperator {

    perform(): Observable<any> {
        return Observable.interval(500).take(5)
            .do(i => console.log(this + "inside do(): " + i))
            .share();
    }

    toString(): string {
        return "Share: ";
    }
}
