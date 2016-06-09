import { Observable } from 'rxjs/Observable';

export interface IOperator {

    perform(): Observable<any>;
    
    toString(): string;
}