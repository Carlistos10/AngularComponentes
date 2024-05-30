import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Widget1Component } from "./widget1/widget1.component";
import { Widget2Component } from "./widget2/widget2.component";
import { Widget3Component } from "./widget3/widget3.component";
import { Widget4Component } from "./widget4/widget4.component";
import { Widget5Component } from "./widget5/widget5.component";
import { Widget6Component } from "./widget6/widget6.component";



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, Widget1Component, Widget2Component, Widget3Component, Widget4Component, Widget5Component, Widget6Component]
})
export class AppComponent {
  title = 'angular-componentes';
}
