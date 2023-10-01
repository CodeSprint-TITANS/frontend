import {
  Component,
  ElementRef,
  Renderer2,
  AfterViewInit,
  Input,
} from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { DialogService } from '../services/dialog.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements AfterViewInit {
  @Input() data: any;

  driverList: any;

  timingList: any[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private el: ElementRef,
    private renderer: Renderer2,
    private dialogService: DialogService,
  ) {}

  ngAfterViewChecked() {
    // Find all elements with data-item attribute
    const elementsToRemove = document.querySelectorAll('[data-item]');

    // Iterate through the NodeList and remove each element
    elementsToRemove.forEach((element) => {
      element.remove();
    });
    for (let i = 0; i < this.driverList.length; i++) {
      const elementWithDataboxAttribute = this.el.nativeElement.querySelector(
        `[data-box="${i}"]`,
      );

      if (elementWithDataboxAttribute) {
        for (let x = 0; x < 10; x++) {
          // Check if the element exists
          const createTd = document.createElement('td');
          createTd.style.width = '100px';
          createTd.setAttribute('data-item', `${i}`);

        }
      }
    }
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    const tableBody = document.getElementById('tablebody');
    if (tableBody) {
      tableBody.innerHTML = '';
    }
    this.driverList = this.data.map((item: any) => {
      return { driver: item.driver, vehicle: item.vehicle, type: item.type };
    });
    this.driverList = this.driverList.reduce((unique: any, o: any) => {
      if (!unique.some((obj: any) => obj.driver === o.driver)) {
        unique.push(o);
      }
      return unique;
    }, []);

    this.timingList = new Array(this.driverList.length)
      .fill(null)
      .map(() => new Array(10).fill(false));

    // this.timingList[0][0] = true;
    // this.timingList[0][1] = false;
    // this.timingList[0][2] = false;
    // this.timingList[0][3] = true;
    // this.timingList[0][1] = true;
    // this.timingList[0][1] = true;
    // this.timingList[0][1] = true;
    // this.timingList[0][1] = true;
    // this.timingList[0][1] = true;
    // this.timingList[0][1] = true;

    const setData = document.getElementById('insert-data');
    const coordinateX = setData?.getBoundingClientRect().x ?? 0;

    this.data.map((item: any) => {
      const div = document.createElement('div');
      div.style.position = 'absolute';

      div.style.left = `${
        ((this.findMinuteDiffrence(
          new Date(item.starttime),
          new Date(new Date().setHours(8, 0, 0, 0)),
        ) *
          60) /
          600) *
        1010
      }px`;
      div.style.marginTop = '12px';
      div.style.marginBottom = '12px';
      div.style.marginLeft = '4px';
      div.style.marginRight = '8px';
      if (item.recommended) {
        div.style.backgroundColor = '#ffcc00';
      } else {
        div.style.backgroundColor = '#777';
      }
      div.style.color = 'white';
      div.style.cursor = 'pointer';

      div.title = `${item.vehicle} ${item.container} ${item.type}`;
      div.style.width = `${
        this.findMinuteDiffrence(item.endtime, item.starttime) * 100
      }px`;
      div.style.top = `${
        this.driverList.findIndex(
          (driver: any) => driver.driver === item.driver,
        ) * 48
      }px`;
      div.innerHTML = item.container;
      if(item.recommended){
      div.addEventListener('click', () => {
        // Function to be executed when the div is clicked
        this.dialogService.openDialogTemplate(item); // Call your specific function here with the 'item' parameter
      }, item);
    }
      setData?.appendChild(div);
    });
  }

  private findMinuteDiffrence(date1: Date, date2: Date): number {
    return (
      Math.abs(new Date(date1).getTime() - new Date(date2).getTime()) /
      (1000 * 60) /
      60
    );
  }
}
