import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  @Output() newTime = new EventEmitter<number>();

  selectedTime: number = 0;

  step = 1;

  formatLabel(value: number): string {
    const _hours = Math.floor((value + 1) / 4);
    if (_hours.toString().length != 2) var hours = '0' + _hours.toString();
    else var hours = _hours.toString();
    const _mins = ((value + 1) % 4) * 15;
    if (_mins.toString().length != 2) var mins = '0' + _mins.toString();
    else var mins = _mins.toString();

    const result = `${hours}${mins}hrs`;
    return `${result}`;
  }

  changeTime(time: any) {
    this.newTime.emit(time);
  }
}
