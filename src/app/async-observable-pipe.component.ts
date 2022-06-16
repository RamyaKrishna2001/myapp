import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observer, Observable, interval, Subscription, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'async-observable-pipe',
  template: `<div>
    <code>observable | async :</code> Time :
    {{ time | async | date: 'medium' }}
  </div>`,
})
export class AsyncObservablePipeComponent implements OnInit, OnDestroy {
  private firstObsSubscribe: any;
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  ngOnInit(): void {
    // this.firstObsSubscribe = interval(1000).subscribe((count) =>
    //   console.log(count)
    // );
    const customIntervalObservable = Observable.create(
      (observer: Observer<Number>) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          if (count === 4) {
            observer.complete();
          } else if (count >= 4) {
            observer.error('Count is greater than 4!');
          }
          count++;
        }, 1000);
      }
    );

    this.firstObsSubscribe = customIntervalObservable
      .pipe(
        map((data: Number) => {
          return 'Round : ' + (+data + 1);
        })
      )
      .subscribe(
        (data: Number) => {
          console.log(data);
        },
        (error: any) => {
          alert(error);
        },
        () => console.log('completed!')
      );
  }

  ngOnDestroy(): void {
    this.firstObsSubscribe.unsubscribe();
  }
}
