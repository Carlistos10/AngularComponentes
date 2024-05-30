import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-widget7',
  standalone: true,
  imports: [
    MatCardModule, MatFormFieldModule, FormsModule, MatInputModule,
    MatButtonModule, MatMenuModule, MatIconModule, MatListModule, MatProgressSpinnerModule, MatSlideToggleModule
  ],
  templateUrl: './widget7.component.html',
  styleUrls: ['./widget7.component.css']
})
export class Widget7Component {

  durationInSeconds = 2;
  loading: boolean = false;

  constructor(private _widgetBar: MatSnackBar) { }

  openWidgetGuardado() {
    this._widgetBar.openFromComponent(CargaGuardado, {
      duration: this.durationInSeconds * 1500,
    });
    setTimeout(() => {
      this._widgetBar.openFromComponent(WidgetAnadido, {
        duration: this.durationInSeconds * 1000,
      });
    }, 1000);
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: '../widgetAnadido.html',
  standalone: true,
})
export class WidgetAnadido { }

@Component({
  selector: 'progress-spinner-overview-example',
  templateUrl: '../cargaWidget.html',
  styleUrls: ['./widget7.component.css'],
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class CargaGuardado { } 7