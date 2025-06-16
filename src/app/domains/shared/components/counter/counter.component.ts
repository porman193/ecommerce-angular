import {
  Component,
  signal,
  SimpleChanges,
  OnChanges,
  OnInit,
  AfterViewInit,
  OnDestroy,
  input
} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent
  implements OnChanges, OnInit, AfterViewInit, OnDestroy
{
  readonly duration = input.required<number>();
  readonly message = input.required<string>();
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    console.log('Constructor');
    console.log('---'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges');
    console.log(changes);
    console.log('---'.repeat(10));
  }

  ngOnInit() {
    console.log('OnInit');
    console.log('---'.repeat(10));
    console.log('duration ' + this.duration());
    console.log('message ' + this.message());
    console.log('---'.repeat(10));

    this.counterRef = window.setInterval(() => {
      this.counter.update((counter) => counter + 1);
    }, 1000);
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');
    console.log('---'.repeat(10));
  }

  ngOnDestroy() {
    console.log('OnDestroy');
    console.log('---'.repeat(10));
    window.clearInterval(this.counterRef);
  }
}
