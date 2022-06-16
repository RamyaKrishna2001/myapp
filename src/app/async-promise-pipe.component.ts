import { Component } from '@angular/core';

@Component({
  selector: 'async-promise-pipe',
  template: `<div>
    <code>promise | async</code> :
    <button class="btn btn-warning rounded-pill" (click)="clicked()">{{ arrived ? 'Reset' : 'Resolve' }}</button>
    <p>Wait for it... {{ greeting | async }}</p>
  </div>`,
})
export class AsyncPromisePipeComponent {
  greeting: Promise<string> | null = null;
  arrived: Boolean = false;

  private resolve: Function | null = null;

  constructor() {
    this.reset();
  }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve!('hi there!');
      this.arrived = true;
    }
  }
}
