//Estos imports son necesarios para la creación de la tarjeta y el botón
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

//Estos imports son los usados para poder crear la lista 
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

//En el componente debemos indicar que imports vamos a necesitar, el archivo html y css 
@Component({
  selector: 'app-widget3',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatMenuModule, MatIconModule, MatListModule],
  templateUrl: './widget3.component.html',
  styleUrls: ['./widget3.component.css']
})
export class Widget3Component {

  //Aqui creamos la lista para que la pueda recoger el componente en el html
  rutina: string[] = ['Lavarse la cara 🧼', 'Desayuno 🥐', 'Lavarse los dientes 🪥', 'Vestirse 👚', 'Coger Mochila 🎒', 'Cerrar la puerta 🏡'];
  durationInSeconds = 2;
  loading: boolean = false;


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
  styleUrls: ['./widget3.component.css'],
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class CargaGuardado { }
