import { Observable as RxJsObservable} from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Component } from '@angular/core';

@Component({
     selector: 'observable',
    templateUrl: 'app/observer/observable.html'
})
export class Observable {

    perform(): void {
        var obs: RxJsObservable<any> = RxJsObservable.interval(500).take(5)
            .map(i => 2 * i);
        obs.subscribe(this.onNext, this.onError, this.onCompleted);
    }

    onNext(result): void {
        console.log("inside onNext: " + result);
    }

    onError(err): void {
        console.log("inside onError: " + err);
    }

    onCompleted(): void {
        console.log("inside onCompleted");
    }
}