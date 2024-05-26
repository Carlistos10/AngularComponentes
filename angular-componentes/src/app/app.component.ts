import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Widget1Component } from "./widget1/widget1.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, Widget1Component]
})
export class AppComponent {
  title = 'angular-componentes';
}
