import { Component, OnInit } from '@angular/core';
import { JobSchedule } from '../JobSchedule';
import { JobDetail } from '../JobDetail';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css'],
})
export class TimetableComponent implements OnInit {
  totalTrips: string = '100';

  dateSelected: any = new FormControl(new Date());

  dateFlag: boolean = false;

  filteredList: JobSchedule[] = [];

  scheduleList: JobSchedule[] = [
    new JobSchedule(
      'TP Terminal -> JE Warehouse',
      '30 mins',
      new Date(2023, 9, 1),
      [
        new JobDetail(3, '35mins', false, false, ''),
        new JobDetail(
          3,
          '50mins',
          true,
          true,
          'Forecasted an extra 30 mins due to high traffic intensity.',
        ),
        new JobDetail(4, '20mins', false, false, ''),
        new JobDetail(
          8,
          '40mins',
          true,
          true,
          'Forecasted an extra 40 mins due to low visibility.',
        ),
        new JobDetail(5, '30mins', false, false, ''),
        new JobDetail(9, '40mins', false, false, ''),
        new JobDetail(1, '50mins', true, false, ''),
        new JobDetail(2, '50mins', false, false, ''),
        new JobDetail(9, '40mins', false, false, ''),
        new JobDetail(2, '30mins', true, false, ''),
        new JobDetail(
          6,
          '50mins',
          true,
          true,
          'Forecasted an extra 50 mins due to high traffic intensity and heavy downpour.',
        ),
        new JobDetail(
          6,
          '50mins',
          true,
          true,
          'Forecasted an extra 25 mins due to high traffic intensity.',
        ),
      ],
    ),
    new JobSchedule(
      'TP Terminal -> AMK Warehouse',
      '40 mins',
      new Date(2023, 9, 1),
      [
        new JobDetail(
          2,
          '50mins',
          true,
          true,
          'Forecasted an extra 30 mins due to high traffic intensity.',
        ),
        new JobDetail(8, '35mins', true, false, ''),
        new JobDetail(6, '20mins', false, false, ''),
        new JobDetail(7, '40mins', false, false, ''),
        new JobDetail(
          8,
          '40mins',
          true,
          true,
          'Forecasted an extra 50 mins due to high traffic intensity and thunderstorm.',
        ),
        new JobDetail(9, '40mins', false, false, ''),
        new JobDetail(6, '50mins', true, false, ''),
        new JobDetail(1, '50mins', false, false, ''),
        new JobDetail(2, '40mins', true, false, ''),
        new JobDetail(1, '30mins', false, false, ''),
        new JobDetail(8, '30mins', false, false, ''),
        new JobDetail(
          9,
          '50mins',
          true,
          true,
          'Forecasted an extra 60 mins due to high traffic intensity.',
        ),
      ],
    ),
    new JobSchedule(
      'Tuas Terminal -> JE Warehouse',
      '25 mins',
      new Date(2023, 9, 1),
      [
        new JobDetail(8, '35mins', false, false, ''),
        new JobDetail(
          8,
          '50mins',
          true,
          true,
          'Forecasted an extra 30 mins due to high traffic intensity.',
        ),
        new JobDetail(9, '20mins', false, false, ''),
        new JobDetail(7, '40mins', false, false, ''),
        new JobDetail(8, '40mins', false, false, ''),
        new JobDetail(
          6,
          '40mins',
          true,
          true,
          'Forecasted an extra 50 mins and heavy downpour.',
        ),
        new JobDetail(5, '40mins', false, false, ''),
        new JobDetail(5, '50mins', false, false, ''),
        new JobDetail(
          8,
          '40mins',
          true,
          true,
          'Forecasted an extra 50 mins and heavy downpour.',
        ),
        new JobDetail(7, '50mins', false, false, ''),
        new JobDetail(1, '40mins', true, false, ''),
        new JobDetail(
          5,
          '50mins',
          true,
          true,
          'Forecasted an extra 60 mins due to high traffic intensity.',
        ),
      ],
    ),
    new JobSchedule(
      'JE Warehouse -> Tuas Terminal',
      '25 mins',
      new Date(2023, 9, 1),
      [
        new JobDetail(8, '35mins', false, false, ''),
        new JobDetail(
          0,
          '50mins',
          true,
          true,
          'Forecasted an extra 30 mins due to high traffic intensity.',
        ),
        new JobDetail(2, '20mins', false, false, ''),
        new JobDetail(4, '40mins', true, false, ''),
        new JobDetail(0, '40mins', true, false, ''),
        new JobDetail(
          8,
          '40mins',
          true,
          true,
          'Forecasted an extra 50 mins and heavy downpour.',
        ),
        new JobDetail(3, '40mins', false, false, ''),
        new JobDetail(1, '50mins', false, false, ''),
        new JobDetail(9, '50mins', true, false, ''),
        new JobDetail(9, '50mins', false, false, ''),
        new JobDetail(
          2,
          '50mins',
          true,
          true,
          'Forecasted an extra 60 mins and heavy downpour.',
        ),
        new JobDetail(
          1,
          '50mins',
          true,
          true,
          'Forecasted an extra 60 mins and heavy downpour.',
        ),
      ],
    ),
    new JobSchedule(
      'JE Warehouse -> Depot 1',
      '55 mins',
      new Date(2023, 9, 1),
      [
        new JobDetail(
          5,
          '50mins',
          true,
          true,
          'Forecasted an extra 30 mins due to high traffic intensity.',
        ),
        new JobDetail(1, '35mins', false, false, ''),
        new JobDetail(9, '20mins', true, false, ''),
        new JobDetail(1, '40mins', false, false, ''),
        new JobDetail(2, '40mins', false, false, ''),
        new JobDetail(
          8,
          '40mins',
          true,
          true,
          'Forecasted an extra 50 mins and heavy downpour.',
        ),
        new JobDetail(6, '40mins', false, false, ''),
        new JobDetail(0, '50mins', true, false, ''),
        new JobDetail(
          2,
          '40mins',
          true,
          true,
          'Forecasted an extra 50 mins and heavy downpour.',
        ),
        new JobDetail(8, '50mins', false, false, ''),
        new JobDetail(
          9,
          '40mins',
          true,
          true,
          'Forecasted an extra 50 mins and heavy downpour.',
        ),
        new JobDetail(
          4,
          '50mins',
          true,
          true,
          'Forecasted an extra 60 mins and heavy downpour.',
        ),
      ],
    ),
    new JobSchedule(
      'JE Warehouse -> Depot 2',
      '35 mins',
      new Date(2023, 9, 1),
      [
        new JobDetail(8, '35mins', false, false, ''),
        new JobDetail(
          1,
          '50mins',
          true,
          true,
          'Forecasted an extra 30 mins due to high traffic intensity.',
        ),
        new JobDetail(2, '20mins', false, false, ''),
        new JobDetail(4, '40mins', true, false, ''),
        new JobDetail(5, '40mins', false, false, ''),
        new JobDetail(
          0,
          '40mins',
          true,
          true,
          'Forecasted an extra 50 mins and heavy downpour.',
        ),
        new JobDetail(3, '40mins', true, false, ''),
        new JobDetail(8, '50mins', false, false, ''),
        new JobDetail(4, '50mins', true, false, ''),
        new JobDetail(4, '50mins', false, false, ''),
        new JobDetail(
          3,
          '40mins',
          true,
          true,
          'Forecasted an extra 50 mins and heavy downpour.',
        ),
        new JobDetail(
          6,
          '40mins',
          true,
          true,
          'Forecasted an extra 50 mins and heavy downpour.',
        ),
      ],
    ),
    new JobSchedule(
      'Tuas Terminal -> JE Warehouse',
      '25 mins',
      new Date(2023, 9, 2),
      [
        new JobDetail(8, '35mins', false, false, ''),
        new JobDetail(
          8,
          '50mins',
          true,
          true,
          'Forecasted an extra 30 mins due to high traffic intensity.',
        ),
        new JobDetail(9, '20mins', false, false, ''),
        new JobDetail(7, '40mins', false, false, ''),
        new JobDetail(8, '40mins', false, false, ''),
        new JobDetail(
          6,
          '40mins',
          true,
          true,
          'Forecasted an extra 50 mins and heavy downpour.',
        ),
        new JobDetail(5, '40mins', false, false, ''),
        new JobDetail(5, '50mins', false, false, ''),
        new JobDetail(
          8,
          '40mins',
          true,
          true,
          'Forecasted an extra 50 mins and heavy downpour.',
        ),
        new JobDetail(7, '50mins', false, false, ''),
        new JobDetail(1, '40mins', true, false, ''),
        new JobDetail(
          5,
          '50mins',
          true,
          true,
          'Forecasted an extra 60 mins due to high traffic intensity.',
        ),
      ],
    ), new JobSchedule(
      'TP Terminal -> JE Warehouse',
      '30 mins',
      new Date(2023, 9, 2),
      [
        new JobDetail(3, '35mins', false, false, ''),
        new JobDetail(
          3,
          '50mins',
          true,
          true,
          'Forecasted an extra 30 mins due to high traffic intensity.',
        ),
        new JobDetail(4, '20mins', false, false, ''),
        new JobDetail(
          8,
          '40mins',
          true,
          true,
          'Forecasted an extra 40 mins due to low visibility.',
        ),
        new JobDetail(5, '30mins', false, false, ''),
        new JobDetail(9, '40mins', false, false, ''),
        new JobDetail(1, '50mins', true, false, ''),
        new JobDetail(2, '50mins', false, false, ''),
        new JobDetail(9, '40mins', false, false, ''),
        new JobDetail(2, '30mins', true, false, ''),
        new JobDetail(
          6,
          '50mins',
          true,
          true,
          'Forecasted an extra 50 mins due to high traffic intensity and heavy downpour.',
        ),
        new JobDetail(
          6,
          '50mins',
          true,
          true,
          'Forecasted an extra 25 mins due to high traffic intensity.',
        ),
      ],
    ),
    new JobSchedule(
      'TP Terminal -> AMK Warehouse',
      '40 mins',
      new Date(2023, 9, 2),
      [
        new JobDetail(
          2,
          '50mins',
          true,
          true,
          'Forecasted an extra 30 mins due to high traffic intensity.',
        ),
        new JobDetail(8, '35mins', true, false, ''),
        new JobDetail(6, '20mins', false, false, ''),
        new JobDetail(7, '40mins', false, false, ''),
        new JobDetail(
          8,
          '40mins',
          true,
          true,
          'Forecasted an extra 50 mins due to high traffic intensity and thunderstorm.',
        ),
        new JobDetail(9, '40mins', false, false, ''),
        new JobDetail(6, '50mins', true, false, ''),
        new JobDetail(1, '50mins', false, false, ''),
        new JobDetail(2, '40mins', true, false, ''),
        new JobDetail(1, '30mins', false, false, ''),
        new JobDetail(8, '30mins', false, false, ''),
        new JobDetail(
          9,
          '50mins',
          true,
          true,
          'Forecasted an extra 60 mins due to high traffic intensity.',
        ),
      ],
    ),
    new JobSchedule(
      'JE Warehouse -> Tuas Terminal',
      '25 mins',
      new Date(2023, 9, 2),
      [
        new JobDetail(8, '35mins', false, false, ''),
        new JobDetail(
          0,
          '50mins',
          true,
          true,
          'Forecasted an extra 30 mins due to high traffic intensity.',
        ),
        new JobDetail(2, '20mins', false, false, ''),
        new JobDetail(4, '40mins', true, false, ''),
        new JobDetail(0, '40mins', true, false, ''),
        new JobDetail(
          8,
          '40mins',
          true,
          true,
          'Forecasted an extra 50 mins and heavy downpour.',
        ),
        new JobDetail(3, '40mins', false, false, ''),
        new JobDetail(1, '50mins', false, false, ''),
        new JobDetail(9, '50mins', true, false, ''),
        new JobDetail(9, '50mins', false, false, ''),
        new JobDetail(
          2,
          '50mins',
          true,
          true,
          'Forecasted an extra 60 mins and heavy downpour.',
        ),
        new JobDetail(
          1,
          '50mins',
          true,
          true,
          'Forecasted an extra 60 mins and heavy downpour.',
        ),
      ],
    ),
    new JobSchedule(
      'JE Warehouse -> Depot 1',
      '55 mins',
      new Date(2023, 9, 2),
      [
        new JobDetail(
          5,
          '50mins',
          true,
          true,
          'Forecasted an extra 30 mins due to high traffic intensity.',
        ),
        new JobDetail(1, '35mins', false, false, ''),
        new JobDetail(9, '20mins', true, false, ''),
        new JobDetail(1, '40mins', false, false, ''),
        new JobDetail(2, '40mins', false, false, ''),
        new JobDetail(
          8,
          '40mins',
          true,
          true,
          'Forecasted an extra 50 mins and heavy downpour.',
        ),
        new JobDetail(6, '40mins', false, false, ''),
        new JobDetail(0, '50mins', true, false, ''),
        new JobDetail(
          2,
          '40mins',
          true,
          true,
          'Forecasted an extra 50 mins and heavy downpour.',
        ),
        new JobDetail(8, '50mins', false, false, ''),
        new JobDetail(
          9,
          '40mins',
          true,
          true,
          'Forecasted an extra 50 mins and heavy downpour.',
        ),
        new JobDetail(
          4,
          '50mins',
          true,
          true,
          'Forecasted an extra 60 mins and heavy downpour.',
        ),
      ],
    ),
    new JobSchedule(
      'JE Warehouse -> Depot 2',
      '35 mins',
      new Date(2023, 9, 2),
      [
        new JobDetail(8, '35mins', false, false, ''),
        new JobDetail(
          1,
          '50mins',
          true,
          true,
          'Forecasted an extra 30 mins due to high traffic intensity.',
        ),
        new JobDetail(2, '20mins', false, false, ''),
        new JobDetail(4, '40mins', true, false, ''),
        new JobDetail(5, '40mins', false, false, ''),
        new JobDetail(
          0,
          '40mins',
          true,
          true,
          'Forecasted an extra 50 mins and heavy downpour.',
        ),
        new JobDetail(3, '40mins', true, false, ''),
        new JobDetail(8, '50mins', false, false, ''),
        new JobDetail(4, '50mins', true, false, ''),
        new JobDetail(4, '50mins', false, false, ''),
        new JobDetail(
          3,
          '40mins',
          true,
          true,
          'Forecasted an extra 50 mins and heavy downpour.',
        ),
        new JobDetail(
          6,
          '40mins',
          true,
          true,
          'Forecasted an extra 50 mins and heavy downpour.',
        ),
      ],
    ),

  ];

  valueChange(): void {
    console.log('test');
    console.log(this.dateSelected.value);
    this.filteredList = this.scheduleList.filter((item: any) => (item.recordDate.getDate() == this.dateSelected.value.getDate() && item.recordDate.getMonth() == this.dateSelected.value.getMonth() && item.recordDate.getFullYear() == this.dateSelected.value.getFullYear()));
    
    console.log(this.filteredList);
    if (this.filteredList.length != 0) {
      this.dateFlag = true;
    } else {
      this.dateFlag = false;
    }
  }

  ngOnInit(): void {
    this.filteredList = this.scheduleList.filter((item: any) => (item.recordDate.getDate() == this.dateSelected.value.getDate() && item.recordDate.getMonth() == this.dateSelected.value.getMonth() && item.recordDate.getFullYear() == this.dateSelected.value.getFullYear()));
    console.log(this.filteredList);
    if (this.filteredList.length != 0) {
      this.dateFlag = true;
    } else {
      this.dateFlag = false;
    }
  }

  // ngDoCheck(): void {
  //   console.log("check")
  //   for (const record in this.scheduleList){
  //     if (this.scheduleList[record].recordDate.getDate() == this.dateSelected.getDate() && 
  //       this.scheduleList[record].recordDate.getMonth() == this.dateSelected.getMonth() &&
  //       this.scheduleList[record].recordDate.getFullYear() == this.dateSelected.getFullYear()){
  //       this.dateFlag = true;
  //       break;
  //     }
  //   }
  // }

}
