import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  constructor() {}

  @Output() newTime = new EventEmitter<number>();

  selectedTime: number = 0;
  max = 93;
  min = 0;
  step = 1;
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
  changeTime(time: any) {
    this.newTime.emit(time);
  }
}
