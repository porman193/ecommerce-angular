import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-about',
  imports: [CounterComponent, ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export default class AboutComponent {
  duration = signal(1000);
  message = signal('');

  durationControl = new FormControl(1000, {
    nonNullable: true,
    validators: [Validators.required],
  });

  messageControl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  changeMessage() {
    this.message.set(this.messageControl.value);
  }

  changeDuration() {
    this.duration.set(this.durationControl.value);
  }
}
