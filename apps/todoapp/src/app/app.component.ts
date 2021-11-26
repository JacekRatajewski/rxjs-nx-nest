import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ajax, ajax$, ajax2 } from '../utils/ajax.fabrics';
import { Note } from '../../../../libs';
import { AsyncSubject, BehaviorSubject, concatMap, delay, EMPTY, from, fromEvent, interval, map, of, ReplaySubject, share, Subject, Subscription, switchMap, tap } from 'rxjs';
import { fromEventFabric } from '../utils/observable.fabrics';
const URL = "http://localhost:3333/api";
@Component({
  selector: 'todoapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('btn') btn!: ElementRef;
  @ViewChild('input') input!: ElementRef;
  btnSub!: Subscription;
  ngAfterViewInit(): void {
    // this.init();
  }
  //ASYNCHRONICZNOŚĆ
  // init() {
  //   ajax.get(`${URL}/notes`, (res: Note[]) => { console.log("CALLBACK:", res) });
  //   ajax2.get(`${URL}/notes`).then((res: Note[]) => { console.log("PROMISE:", res) });
  //   ajax$.get<Note[]>(`${URL}/notes`).subscribe((res: Note[]) => { console.log("OBSERVABLE:", res) });
  // }

  //OBSERVABLE, SUBSCRIPTION, OBSERVER
  // init() {
  //   const btn$ = fromEventFabric(this.btn.nativeElement, 'click');//fromEvent(this.btn.nativeElement, 'click')
  //   this.btnSub = btn$.subscribe({
  //     next: (v: any) => console.log(v),
  //     error: (err: any) => console.log(err),
  //     complete: () => { }
  //   });
  //   setTimeout(() => this.btnSub.unsubscribe(), 3000);
  // }

  // ngOnDestroy() {
  //   this.btnSub.unsubscribe();
  // }

  //SUBJECTS
  // init() {
  //   const subject$ = new Subject();
  //   const behSubject$ = new BehaviorSubject<Note[]>([]);
  //   const repSubject$ = new ReplaySubject(3);
  //   const asyncSubject$ = new AsyncSubject();

    //SUBJECT
    // ajax$.get<Note[]>(`${URL}/notes`).subscribe((res: Note[]) => { subject$.next(res) });
    // ajax$.get<Note[]>(`${URL}/notes`).pipe(
    //   delay(3000),
    //   map((res: Note[]) => {
    //     res.push({ name: 'test2', desc: '', date: new Date() });
    //     return res;
    //   })
    // ).subscribe((res: Note[]) => { subject$.next(res) });
    // subject$.subscribe(val => console.log('SUBJECT', val));

    //BEHAVIOR SUBJECT
    // ajax$.get<Note[]>(`${URL}/notes`).subscribe((res: Note[]) => { behSubject$.next(res) });
    // console.log(behSubject$.value);

    // behSubject$.subscribe(val => console.log('BEH_SUBJECT', val));
    // setTimeout(() => console.log(behSubject$.value), 5000);

    // //REPLAY SUBJECT
    // ajax$.get<Note[]>(`${URL}/notes`).subscribe((res: Note[]) => { repSubject$.next(res) });
    // ajax$.get<Note[]>(`${URL}/notes`).pipe(delay(3000)).subscribe((res: Note[]) => { repSubject$.next(res) });
    // repSubject$.subscribe(val => console.log('REP_SUBJECT', val));
    // setTimeout(() => repSubject$.subscribe(val => console.log('REP_SUBJECT 2', val)), 5000)

    // //ASYNC SUBJECT
    // ajax$.get<Note[]>(`${URL}/notes`).subscribe((res: Note[]) => { asyncSubject$.next(res) });
    // ajax$.get<Note[]>(`${URL}/notes`).pipe(
    //   delay(3000),
    //   map((res: Note[]) => {
    //     res.push({ name: 'test2', desc: '', date: new Date() });
    //     return res;
    //   })
    // ).subscribe((res: Note[]) => { asyncSubject$.next(res) });

    // asyncSubject$.subscribe(val => console.log('ASYNC_SUBJECT', val));
    // setTimeout(() => asyncSubject$.complete(), 5000);
 // }

  //MULTICASTING
  // init() {
  //   const btn$ = fromEventFabric(this.btn.nativeElement, 'click').pipe(tap(() => console.log('MUTLI')), share())
  //   this.btnSub = btn$.subscribe((val) => { console.log('BTNCLICKED:', val) });
  //   const btnSub = btn$.subscribe((val) => { console.log('BTNCLICKED 2:', val) });
  // }

  //TWORZENIE STRUMIENI
  // init() {
  //   const interval$ = interval(500);
  //   const of$ = of({ name: 'test', desc: '', date: new Date() } as Note, { name: 'test', desc: '', date: new Date() } as Note, { name: 'test', desc: '', date: new Date() } as Note, { name: 'test', desc: '', date: new Date() } as Note);
  //   const from$ = from([{ name: 'test', desc: '', date: new Date() }, { name: 'test', desc: '', date: new Date() }] as Note[]);
  //   const empty$ = EMPTY;

  //  // interval$.subscribe(val => console.log(val));
  //   //of$.subscribe(val => console.log(val));
  //    //from$.subscribe(val => console.log(val));
  //   empty$.subscribe(val => console.log(val));

  // }
}
