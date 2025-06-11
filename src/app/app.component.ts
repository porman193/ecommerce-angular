
import { Component, signal, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./domains/shared/components/header/header.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: 'app.component.html',
})

export class AppComponent {
  title = 'ecommerce';


}
