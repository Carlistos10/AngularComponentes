//Estos son los imports necesarios para la creación de la tarjeta y el botón de guardado
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

//No es necesario importar nada extra para crear el cronometro

//En el componente debemos indicar que imports vamos a necesitar, el archivo html y css 
@Component({
  selector: 'app-widget5',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './widget5.component.html',
  styleUrls: ['./widget5.component.css']
})
export class Widget5Component implements OnInit, OnDestroy {

  //Aqui indicamos las variables para sacar la hora y ver si el cronometro esta funcionando o no
  durationInSeconds = 2;
  time: number = 0;
  isRunning: boolean = false;
  timer: any;

  constructor(private _widgetBar: MatSnackBar) { }

  ngOnInit(): void { }

  //Estas funciones son para parar el cronometro, empezarlo y resetearlo
  ngOnDestroy(): void {
    this.stopTimer();
  }

  startTimer(): void {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timer = setInterval(() => {
        this.time += 10;
      }, 10);
    }
  }

  stopTimer(): void {
    if (this.isRunning) {
      clearInterval(this.timer);
      this.isRunning = false;
    }
  }

  resetTimer(): void {
    this.stopTimer();
    this.time = 0;
  }

  //En esta parte indicamos el formato que queremos que tenga el cronometro, como por ejemplo cuantos milisegundos muestra
  formatTime(time: number): string {
    const milliseconds = time % 1000;
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 60000) % 60;
    const hours = Math.floor(time / 3600000);
    return `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')} . ${String(milliseconds).padStart(3, '0')}`;
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
  styleUrls: ['./widget5.component.css'],
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class CargaGuardado { }
