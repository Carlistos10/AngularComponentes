//Estos son los imports necesarios para la creación de la tarjeta y el botón de guardado
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

//Para poder realizar la tabla necesitamos importarla
import { MatTableModule } from '@angular/material/table';

//Primero debemos crear las variables indicando el tipo de datos que va a almacenar
export interface Horario {
  Lunes: string;
  Martes: string;
  Miercoles: string;
  Jueves: string;
  Viernes: string;
  hora: string;
}

//Despues creamos la tabla con sus datos correspondientes
const HORARIO_DATA: Horario[] = [
  { hora: '8:15 - 9:10', Lunes: 'DIW', Martes: 'DAW', Miercoles: 'DWES', Jueves: 'DAW', Viernes: 'DWES' },
  { hora: '9:10 - 10:05', Lunes: 'DIW', Martes: 'DWES', Miercoles: 'DWES', Jueves: 'DAW', Viernes: 'DWES' },
  { hora: '10:05 - 11:00', Lunes: 'EIE', Martes: 'DWES', Miercoles: 'DWES', Jueves: 'DWEC', Viernes: 'DIW' },
  { hora: '11:00 - 11:30', Lunes: 'Descanso', Martes: 'Descanso', Miercoles: 'Descanso', Jueves: 'Descanso', Viernes: 'Descanso' },
  { hora: '11:30 - 12:25', Lunes: 'EIE', Martes: 'DWEC', Miercoles: 'EIE', Jueves: 'DWEC', Viernes: 'DIW' },
  { hora: '12:25 - 13:20', Lunes: 'DWES', Martes: 'DWEC', Miercoles: 'DAW', Jueves: 'DIW', Viernes: 'DWEC' },
  { hora: '13:20 - 14:15', Lunes: 'DWES', Martes: 'DWEC', Miercoles: 'DAW', Jueves: 'DIW', Viernes: 'DWEC' }
];

//En el componente debemos indicar que imports vamos a necesitar, el archivo html y css 

@Component({
  selector: 'app-widget6',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatTableModule],
  templateUrl: './widget6.component.html',
  styleUrls: ['./widget6.component.css']
})
export class Widget6Component {

  //Aqui indicamos las tablas que van a ser visibles
  displayedColumns: string[] = ['hora', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
  dataSource = HORARIO_DATA;

  durationInSeconds = 2;

  //Estas opciones son para el boton de guardado
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

//Estos dos componentes indican el html en el que se encuentra el contenido de la barra y el spinner
@Component({
  selector: 'bar-component',
  templateUrl: '../widgetAnadido.html',
  standalone: true,
})
export class WidgetAnadido { }

@Component({
  selector: 'progress-spinner-overview',
  templateUrl: '../cargaWidget.html',
  styleUrls: ['./widget6.component.css'],
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class CargaGuardado { }
