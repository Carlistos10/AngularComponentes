// Primero debemos importar todo lo que vayamos a usar. Estos primeros imports estan en todos
// los widgets ya que son necesarios para la presentacion de las tarjetas y el botón de guardado
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Estos imports son los necesarios para el calendario
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

//En el componente debemos indicar que imports vamos a necesitar, el archivo html y css 
@Component({
  selector: 'app-widget1',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './widget1.component.html',
  styleUrl: './widget1.component.css'
})
export class Widget1Component {
  //Este proceso sirve para enseñar el icono de carga por 2 segundos y la barra de abajo indicando que se ha guardado el widget
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
  styleUrls: ['./widget1.component.css'],
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class CargaGuardado { }