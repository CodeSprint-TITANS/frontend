import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.css']
})
export class GanttComponent {

  pendingList = [
    {id : 1, vehicle: 'SGX12345', driver: 'Thomas', container: 'C12004212', type: 'GP', status: "Pending", starttime: '2020-01-01 12:00:00', endtime: '2020-01-05 12:00:00', expand: false},
    {id : 2, vehicle: 'SGH43025', driver: 'Rico', container: 'C12004242', type: 'RF', status: "Pending", starttime: '2020-01-01 12:00:00', endtime: '2020-01-05 12:00:00', expand: false},
    {id : 3, vehicle: 'SGT60459', driver: 'Vinny', container: 'B12003434', type: 'GP', status: "Pending", starttime: '2020-01-01 12:00:00', endtime: '2020-01-05 12:00:00', expand: false},
    {id : 4, vehicle: 'SGJ03458', driver: 'Callen', container: 'F32402340', type: 'GP', status: "Pending", starttime: '2020-01-01 12:00:00', endtime: '2020-01-05 12:00:00', expand: false},
    {id : 5, vehicle: 'SGY75843', driver: 'Ryan', container: 'G20239232', type: 'GP', status: "Pending", starttime: '2020-01-01 12:00:00', endtime: '2020-01-05 12:00:00', expand: false},
    {id : 6, vehicle: 'SGU14354', driver: 'Brandon', container: 'H34022340', type: 'RF', status: "Pending", starttime: '2020-01-01 12:00:00', endtime: '2020-01-05 12:00:00', expand: false},
    {id : 7, vehicle: 'SGB02382', driver: 'Judy', container: 'S20232932', type: 'GP', status: "Pending", starttime: '2020-01-01 12:00:00', endtime: '2020-01-05 12:00:00', expand: false},
    {id : 8, vehicle: 'SGB02382', driver: 'Howard', container: 'T34394390', type: 'RF', status: "Pending", starttime: '2020-01-01 12:00:00', endtime: '2020-01-05 12:00:00', expand: false},
    {id : 9, vehicle: 'SGB02382', driver: 'Kingston', container: 'H23202399', type: 'GP', status: "Pending", starttime: '2020-01-01 12:00:00', endtime: '2020-01-05 12:00:00', expand: false},
    {id : 10, vehicle: 'SGB02382', driver: 'Potter', container: 'C23430490', type: 'RF', status: "Pending", starttime: '2020-01-01 12:00:00', endtime: '2020-01-05 12:00:00', expand: false},
  ]

  filterList

  constructor(private datePipe: DatePipe) { 
    this.pendingList.forEach((item) => {
      item.starttime = this.convertDate(item.starttime);
      item.endtime = this.convertDate(item.endtime);
    })
    this.filterList = this.pendingList;
  }

  public convertDate(date: string): string {
    const inputDate = new Date(date); // Convert input string to Date object
    const formattedDate = this.datePipe.transform(inputDate, 'dd MMM hh:mm a'); // Format the date
    return formattedDate ? formattedDate : ''; // Add null check before returning the formatted date
  }

  onDrop(event: any): void {
    moveItemInArray(this.pendingList, event.previousIndex, event.currentIndex);
  }

  expandItem(index: number){
    this.pendingList[index].expand = !this.pendingList[index].expand;
  }

  search(event:Event){
    let searchValue = (<HTMLInputElement>event.target).value;
    this.filterList = this.pendingList.filter((item) => {
      
      return item.vehicle.toLowerCase().includes(searchValue.toLowerCase()) || item.driver.toLowerCase().includes(searchValue.toLowerCase()) || item.container.toLowerCase().includes(searchValue.toLowerCase()) || item.type.toLowerCase().includes(searchValue.toLowerCase()) || item.status.toLowerCase().includes(searchValue.toLowerCase()) || item.starttime.toLowerCase().includes(searchValue.toLowerCase()) || item.endtime.toLowerCase().includes(searchValue.toLowerCase());
    })
  }
}
