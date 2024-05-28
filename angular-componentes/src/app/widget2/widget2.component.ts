import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import moment from 'moment';


@Component({
  selector: 'app-widget2',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './widget2.component.html',
  styleUrl: './widget2.component.css'
})
export class Widget2Component implements OnInit {

  durationInSeconds = 2;

  firstTime: string;
  hour!: string;

  constructor(private _widgetBar: MatSnackBar) {
    this.firstTime = moment().format('HH : mm : ss');
  }

  ngOnInit(): void {
    setInterval(() => {
      this.hour = moment().format('HH : mm : ss');
    }, 1000);
  }

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