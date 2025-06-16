import {
  Component,
  signal,
  SimpleChanges,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  input,
  afterNextRender,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent implements OnChanges, AfterViewInit, OnDestroy {
  readonly duration = input.required<number>();
  readonly message = input.required<string>();
  counter = signal(0);
  counterRef: number | undefined | null = null;

  constructor() {
    afterNextRender(() => {
      this.counterRef = window.setInterval(() => {
        this.counter.update((counter) => counter + 1);
      }, 1000);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges');
    console.log(changes);
    console.log('---'.repeat(10));
  }

  ngAfterViewInit() {
    console.log('---'.repeat(10));
  }

  ngOnDestroy() {
    console.log('OnDestroy');
    console.log('---'.repeat(10));
    if (this.counterRef) {
      window.clearInterval(this.counterRef);
    }
  }
}
