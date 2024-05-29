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

@Component({
  selector: 'app-widget3',
  standalone: true,
  imports: [
    MatCardModule, MatFormFieldModule, FormsModule, MatInputModule,
    MatButtonModule, MatMenuModule, MatIconModule, MatListModule, MatProgressSpinnerModule
  ],
  templateUrl: './widget3.component.html',
  styleUrls: ['./widget3.component.css']
})
export class Widget3Component {

  rutina: string[] = ['Lavarse la cara', 'Desayuno', 'Lavarse los dientes', 'Vestirse', 'Coger Mochila', 'Cerrar la puerta'];
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
  styleUrls: ['./widget3.component.css'],
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class CargaGuardado { }
