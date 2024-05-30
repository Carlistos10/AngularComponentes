import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

export interface Horario {
  Lunes: string;
  Martes: string;
  Miercoles: string;
  Jueves: string;
  Viernes: string;
  hora: string;
}

const HORARIO_DATA: Horario[] = [
  { hora: '8:15 - 9:10', Lunes: 'DIW', Martes: 'DAW', Miercoles: 'DWES', Jueves: 'DAW', Viernes: 'DWES' },
  { hora: '9:10 - 10:05', Lunes: 'DIW', Martes: 'DWES', Miercoles: 'DWES', Jueves: 'DAW', Viernes: 'DWES' },
  { hora: '10:05 - 11:00', Lunes: 'EIE', Martes: 'DWES', Miercoles: 'DWES', Jueves: 'DWEC', Viernes: 'DIW' },
  { hora: '11:00 - 11:30', Lunes: 'Descanso', Martes: 'Descanso', Miercoles: 'Descanso', Jueves: 'Descanso', Viernes: 'Descanso' },
  { hora: '11:30 - 12:25', Lunes: 'EIE', Martes: 'DWEC', Miercoles: 'EIE', Jueves: 'DWEC', Viernes: 'DIW' },
  { hora: '12:25 - 13:20', Lunes: 'DWES', Martes: 'DWEC', Miercoles: 'DAW', Jueves: 'DIW', Viernes: 'DWEC' },
  { hora: '13:20 - 14:15', Lunes: 'DWES', Martes: 'DWEC', Miercoles: 'DAW', Jueves: 'DIW', Viernes: 'DWEC' }
];

@Component({
  selector: 'app-widget6',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './widget6.component.html',
  styleUrls: ['./widget6.component.css']
})
export class Widget6Component {

  displayedColumns: string[] = ['hora', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
  dataSource = HORARIO_DATA;

  durationInSeconds = 2;

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
  styleUrls: ['./widget6.component.css'],
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class CargaGuardado { }
