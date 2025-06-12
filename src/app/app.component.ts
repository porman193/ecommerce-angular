
import { Component, signal, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: 'app.component.html',
})

export class AppComponent {
  title = 'ecommerce';


}
