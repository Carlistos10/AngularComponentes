import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListOption } from '@angular/material/list';
import { MatListItem } from '@angular/material/list';
import { MatSelectionList } from '@angular/material/list';


@Component({
  selector: 'app-widget3',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule, MatMenuModule, MatIcon, MatList, MatListItem, MatSelectionList, MatListOption],
  templateUrl: './widget3.component.html',
  styleUrl: './widget3.component.css'
})
export class Widget3Component {

  tiposDeComidas: string[] = ['Desayuno', 'Media Mañana', 'Comida', 'Merienda', 'Cena'];

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
