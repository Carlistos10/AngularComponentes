//Estos son los imports necesarios para la creación de la tarjeta y el botón de guardado
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

//Para poder utilizar el slider, usaremos esta importación
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

//En el componente debemos indicar que imports vamos a necesitar, el archivo html y css 
@Component({
  selector: 'app-widget7',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatSlideToggleModule],
  templateUrl: './widget7.component.html',
  styleUrls: ['./widget7.component.css']
})
export class Widget7Component {

  //Indicamos las variables para el boton de guardado y la carga del boton
  durationInSeconds = 2;
  loading: boolean = false;

  constructor(private _widgetBar: MatSnackBar) { }

  //Estas opciones son para el boton de guardado
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
  styleUrls: ['./widget7.component.css'],
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class CargaGuardado { }