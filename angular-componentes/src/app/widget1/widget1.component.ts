import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-widget1',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './widget1.component.html',
  styleUrl: './widget1.component.css'
})
export class Widget1Component {

}
