import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-widget5',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './widget5.component.html',
  styleUrls: ['./widget5.component.css']
})
export class Widget5Component implements OnInit, OnDestroy {
  durationInSeconds = 2;
  time: number = 0;
  isRunning: boolean = false;
  timer: any;

  constructor(private _widgetBar: MatSnackBar) { }

  ngOnInit(): void { }

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

  formatTime(time: number): string {
    const milliseconds = time % 1000;
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 60000) % 60;
    const hours = Math.floor(time / 3600000);
    return `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')} . ${String(milliseconds).padStart(3, '0')}`;
  }

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
  styleUrls: ['./widget5.component.css'],
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class CargaGuardado { }
