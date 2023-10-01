import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DialogService } from '../services/dialog.service';
@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.css'],
})
export class GanttComponent {

  pendingList = [
    { id : 1, vehicle: 'SGX12345', driver: 'Thomas', container: 'C12004212', type: 'GP', status: 'Pending', starttime: '2023-10-01 12:00:00', endtime: '2023-10-01 13:32:00', expand: false, recommended: true, reason: 'A traffic jam is expected on the way to the port', to: '', from: '' },
    { id : 2, vehicle: 'SGH43025', driver: 'Rico', container: 'C12004242', type: 'RF', status: 'Pending', starttime: '2023-10-01 12:00:00', endtime: '2023-10-01 13:32:00', expand: false, recommended: false, reason: '', from: '', to: '' },
    { id : 3, vehicle: 'SGT60459', driver: 'Vinny', container: 'B12003434', type: 'GP', status: 'Pending', starttime: '2023-10-01 12:00:00', endtime: '2023-10-01 13:32:00', expand: false, recommended: false, reason: '', from: '', to: '' },
    { id : 4, vehicle: 'SGJ03458', driver: 'Callen', container: 'F32402340', type: 'GP', status: 'Pending', starttime: '2023-10-01 12:00:00', endtime: '2023-10-01 13:32:00', expand: false, recommended: false, reason: '', from: '', to: '' },
    { id : 5, vehicle: 'SGY75843', driver: 'Ryan', container: 'G20239232', type: 'GP', status: 'Pending', starttime: '2023-10-01 12:00:00', endtime: '2023-10-01 13:32:00', expand: false, recommended: false, reason: '', from: '', to: '' },
    { id : 6, vehicle: 'SGU14354', driver: 'Brandon', container: 'H34022340', type: 'RF', status: 'Pending', starttime: '2023-10-01 12:00:00', endtime: '2023-10-01 13:32:00', expand: false, recommended: true, reason: 'Heavy rain is expected', from: '', to: '' },
    { id : 7, vehicle: 'SGB02382', driver: 'Judy', container: 'S20232932', type: 'GP', status: 'Pending', starttime: '2023-10-01 12:00:00', endtime: '2023-10-01 13:32:00', expand: false, recommended: false, reason: '', from: '', to: '' },
    { id : 8, vehicle: 'SGT65336', driver: 'Howard', container: 'T34394390', type: 'RF', status: 'Pending', starttime: '2023-10-01 08:00:00', endtime: '2023-10-01 13:32:00', expand: false, recommended: false, reason: '', from: '', to: '' },
    { id : 9, vehicle: 'SGG54542', driver: 'Kingston', container: 'H23202399', type: 'GP', status: 'Pending', starttime: '2023-10-01 12:00:00', endtime: '2023-10-01 13:32:00', expand: false, recommended: false, reason: '', from: '', to: '' },
    { id : 10, vehicle: 'SGV23237', driver: 'Harry', container: 'V1243430', type: 'RF', status: 'Pending', starttime: '2023-10-01 12:00:00', endtime: '2023-10-01 13:32:00', expand: false, recommended: false, reason: '', from: '', to: '' },
    { id : 11, vehicle: 'SGC45443', driver: 'Charles', container: 'C77734490', type: 'RF', status: 'Pending', starttime: '2023-10-01 12:00:00', endtime: '2023-10-01 13:32:00', expand: false, recommended: false, reason: '', from: '', to: '' },
    { id : 12, vehicle: 'SGX23239', driver: 'Granger', container: 'T23434190', type: 'RF', status: 'Pending', starttime: '2023-10-01 12:00:00', endtime: '2023-10-01 13:32:00', expand: false, recommended: false, reason: '', from: '', to: '' },
    { id : 13, vehicle: 'SGR13238', driver: 'Hero', container: 'C78454220', type: 'RF', status: 'Pending', starttime: '2023-10-01 12:00:00', endtime: '2023-10-01 13:32:00', expand: false, recommended: false, reason: '', from: '', to: '' },
    { id : 14, vehicle: 'SGU23232', driver: 'Baru', container: 'Y44656560', type: 'RF', status: 'Pending', starttime: '2023-10-01 12:00:00', endtime: '2023-10-01 13:32:00', expand: false, recommended: false, reason: '', from: '', to: '' },
  ];

  filterList;

  constructor(private datePipe: DatePipe, private dialogService: DialogService) { 
    this.pendingList.forEach((item) => {
      item.starttime = this.convertDate(item.starttime);
      item.endtime = this.convertDate(item.endtime);
    });
    this.filterList = this.pendingList;
  }

  public convertDate(date: string): string {
    const inputDate = new Date(date); // Convert input string to Date object
    const formattedDate = this.datePipe.transform(inputDate, 'dd MMM hh:mm a'); // Format the date
    return formattedDate ? formattedDate : ''; // Add null check before returning the formatted date
  }

  showMessage(item: any) {
    this.dialogService.openDialogTemplate(item);
  }

  onDrop(event: any): void {
    moveItemInArray(this.pendingList, event.previousIndex, event.currentIndex);
  }

  expandItem(index: number) {
    this.pendingList[index].expand = !this.pendingList[index].expand;
  }

  search(event:Event) {
    const searchValue = (<HTMLInputElement>event.target).value;
    this.filterList = this.pendingList.filter((item) => {
      
      return item.vehicle.toLowerCase().includes(searchValue.toLowerCase()) || item.driver.toLowerCase().includes(searchValue.toLowerCase()) || item.container.toLowerCase().includes(searchValue.toLowerCase()) || item.type.toLowerCase().includes(searchValue.toLowerCase()) || item.status.toLowerCase().includes(searchValue.toLowerCase()) || item.starttime.toLowerCase().includes(searchValue.toLowerCase()) || item.endtime.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
}
