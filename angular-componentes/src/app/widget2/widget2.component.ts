//Estos son los imports necesarios para la creación de la tarjeta y el botón de guardado
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

//Para poder sacar la hora usaremos la importación de moment
import moment from 'moment';

//En el componente debemos indicar que imports vamos a necesitar, el archivo html y css 
@Component({
  selector: 'app-widget2',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './widget2.component.html',
  styleUrl: './widget2.component.css'
})
export class Widget2Component implements OnInit {

  //Aqui creamos las variables para sacar la hora
  firstTime: string;
  hour!: string;

  //Esta constante es para el tiempo del boton de guardado
  durationInSeconds = 2;


  constructor(private _widgetBar: MatSnackBar) {
    this.firstTime = moment().format('HH : mm : ss');
  }

  //Aqui indicamos la disposición que queremos que tenga el reloj
  ngOnInit(): void {
    setInterval(() => {
      this.hour = moment().format('HH : mm : ss');
    }, 1000);
  }

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
  styleUrls: ['./widget2.component.css'],
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class CargaGuardado { }