import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-widget1',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './widget1.component.html',
  styleUrl: './widget1.component.css'
})
export class Widget1Component {
  durationInSeconds = 2;

  constructor(private _widgetBar: MatSnackBar) { }

  openWidgetGuardado() {
    this._widgetBar.openFromComponent(WidgetAnadido, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: '../widgetAnadido.html',
  standalone: true,
})
export class WidgetAnadido { }