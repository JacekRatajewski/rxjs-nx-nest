import { Observable, Observer } from "rxjs";

export function fromEventFabric(element: HTMLElement, eventType: string): Observable<any> {
    return new Observable((observer: Observer<any>) => {
        //CONSTRUCTOR
        console.log('CONSTRUCTOR')
        element.addEventListener(eventType, (e) => observer.next(e));
        return () => {
            //DESTRUCTOR
            console.log('DESTRUCTOR')
            observer.complete();
        }
    });
}