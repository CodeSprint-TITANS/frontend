import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { DialogService } from '../services/dialog.service';
@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.css'],
})
export class GanttComponent {

  pendingList = [
    { id : 1, vehicle: 'SGX12345', driver: 'Thomas', container: 'C12004212', type: 'GP', status: 'Pending', starttime: '2023-10-01 12:00:00', endtime: '2023-10-01 13:30:00', expand: false, recommended: true, reason: 'A traffic jam is expected on the way to the port', suggestion: 'Swap the timeslot with another job', to: 'JE Warehouse', from: 'Tuas Terminal' },
    { id : 2, vehicle: 'SGH43025', driver: 'Rico', container: 'C12004242', type: 'RF', status: 'Pending', starttime: '2023-10-01 11:00:00', endtime: '2023-10-01 11:30:00', expand: false, recommended: false, reason: '', from: '', to: '', suggestion: '' },
    { id : 3, vehicle: 'SGT60459', driver: 'Vinny', container: 'B12003434', type: 'GP', status: 'Pending', starttime: '2023-10-01 09:00:00', endtime: '2023-10-01 09:30:00', expand: false, recommended: false, reason: '', from: '', to: '', suggestion: '' },
    { id : 4, vehicle: 'SGJ03458', driver: 'Callen', container: 'F32402340', type: 'GP', status: 'Pending', starttime: '2023-10-01 08:15:00', endtime: '2023-10-01 9:15:00', expand: false, recommended: false, reason: '', from: '', to: '', suggestion: '' },
    { id : 5, vehicle: 'SGY75843', driver: 'Ryan', container: 'G20239232', type: 'GP', status: 'Pending', starttime: '2023-10-01 12:00:00', endtime: '2023-10-01 13:32:00', expand: false, recommended: false, reason: '', from: '', to: '', suggestion: '' },
    { id : 6, vehicle: 'SGU14354', driver: 'Brandon', container: 'H34022340', type: 'RF', status: 'Pending', starttime: '2023-10-01 15:00:00', endtime: '2023-10-01 15:30:00', expand: false, recommended: true, reason: 'Heavy rain is expected', from: 'TP Terminal', to: 'AMK Warehouse', suggestion: 'Shift to a later time' },
    { id : 7, vehicle: 'SGB02382', driver: 'Judy', container: 'S20232932', type: 'GP', status: 'Pending', starttime: '2023-10-01 14:00:00', endtime: '2023-10-01 16:05:00', expand: false, recommended: false, reason: '', from: '', to: '', suggestion: '' },
    { id : 8, vehicle: 'SGT65336', driver: 'Howard', container: 'T34394390', type: 'RF', status: 'Pending', starttime: '2023-10-01 08:00:00', endtime: '2023-10-01 09:30:00', expand: false, recommended: false, reason: '', from: '', to: '', suggestion: '' },
    { id : 9, vehicle: 'SGG54542', driver: 'Kingston', container: 'H23202399', type: 'GP', status: 'Pending', starttime: '2023-10-01 15:00:00', endtime: '2023-10-01 15:30:00', expand: false, recommended: false, reason: '', from: '', to: '', suggestion: '' },
    { id : 10, vehicle: 'SGV23237', driver: 'Harry', container: 'V1243430', type: 'RF', status: 'Pending', starttime: '2023-10-01 13:20:00', endtime: '2023-10-01 14:15:00', expand: false, recommended: true, reason: 'Terminal gate is expected to be congested', from: 'TP Terminal', to: 'JE Warehouse', suggestion: 'Swap with another driver' },
    { id : 11, vehicle: 'SGC45443', driver: 'Charles', container: 'C77734490', type: 'RF', status: 'Pending', starttime: '2023-10-01 12:00:00', endtime: '2023-10-01 12:45:00', expand: false, recommended: false, reason: '', from: '', to: '', suggestion: '' },
    { id : 12, vehicle: 'SGX23239', driver: 'Granger', container: 'T23434190', type: 'RF', status: 'Pending', starttime: '2023-10-01 2:00:00', endtime: '2023-10-01 3:30:00', expand: false, recommended: false, reason: '', from: '', to: '', suggestion: '' },
    { id : 13, vehicle: 'SGR13238', driver: 'Hero', container: 'C78454220', type: 'RF', status: 'Pending', starttime: '2023-10-01 12:30:00', endtime: '2023-10-01 13:00:00', expand: false, recommended: false, reason: '', from: '', to: '', suggestion: '' },
    { id : 14, vehicle: 'SGU23232', driver: 'Baru', container: 'D87654321', type: 'RF', status: 'Pending', starttime: '2023-10-01 13:00:00', endtime: '2023-10-01 14:00:00', expand: false, recommended: false, reason: '', from: '', to: '', suggestion: '' },
    { id : 15, vehicle: 'SGX12345', driver: 'Thomas', container: 'T34567890', type: 'GP', status: 'Pending', starttime: '2023-10-01 16:00:00', endtime: '2023-10-01 17:00:00', expand: false, recommended: true, reason: 'A traffic jam is expected on the way to the port', suggestion: 'Swap the timeslot with another job', to: 'JE Warehouse', from: 'Tuas Terminal' },
    { id : 16, vehicle: 'SGH43025', driver: 'Rico', container: 'C12004242', type: 'RF', status: 'Pending', starttime: '2023-10-01 08:00:00', endtime: '2023-10-01 09:00:00', expand: false, recommended: false, reason: '', from: '', to: '', suggestion: '' },
    { id : 17, vehicle: 'SGT60459', driver: 'Vinny', container: 'G21098765', type: 'GP', status: 'Pending', starttime: '2023-10-01 13:00:00', endtime: '2023-10-01 13:45:00', expand: false, recommended: true, reason: 'Terminal Gate under service', from: '', to: '', suggestion: 'Pick a less crowded time' },
    { id : 18, vehicle: 'SGJ03458', driver: 'Callen', container: 'X54321098', type: 'GP', status: 'Pending', starttime: '2023-10-01 15:15:00', endtime: '2023-10-01 16:30:00', expand: false, recommended: false, reason: '', from: '', to: '', suggestion: '' },
    { id : 19, vehicle: 'SGY75843', driver: 'Ryan', container: 'D89012345', type: 'GP', status: 'Pending', starttime: '2023-10-01 09:30:00', endtime: '2023-10-01 11:15:00', expand: false, recommended: false, reason: '', from: '', to: '', suggestion: '' },
    { id : 20, vehicle: 'SGU14354', driver: 'Brandon', container: 'H34022340', type: 'RF', status: 'Pending', starttime: '2023-10-01 14:15:00', endtime: '2023-10-01 15:30:00', expand: false, recommended: false, reason: '', from: 'TP Terminal', to: 'AMK Warehouse', suggestion: 'Shift to a later time' },
    { id : 21, vehicle: 'SGB02382', driver: 'Judy', container: 'S20232932', type: 'GP', status: 'Pending', starttime: '2023-10-01 08:00:00', endtime: '2023-10-01 09:05:00', expand: false, recommended: false, reason: '', from: '', to: '', suggestion: '' },
    { id : 22, vehicle: 'SGT65336', driver: 'Howard', container: 'F54321098', type: 'RF', status: 'Pending', starttime: '2023-10-01 14:00:00', endtime: '2023-10-01 15:15:00', expand: false, recommended: true, reason: 'Construction works', from: '', to: '', suggestion: 'Swap with another driver' },
    { id : 23, vehicle: 'SGG54542', driver: 'Kingston', container: 'R75432399', type: 'GP', status: 'Pending', starttime: '2023-10-01 10:00:00', endtime: '2023-10-01 11:30:00', expand: false, recommended: false, reason: '', from: '', to: '', suggestion: '' },
    { id : 24, vehicle: 'SGV23237', driver: 'Harry', container: 'W34575430', type: 'RF', status: 'Pending', starttime: '2023-10-01 09:20:00', endtime: '2023-10-01 10:15:00', expand: false, recommended: false, reason: '', from: 'TP Terminal', to: 'JE Warehouse', suggestion: '' },
    { id : 25, vehicle: 'SGC45443', driver: 'Charles', container: 'U55666490', type: 'RF', status: 'Pending', starttime: '2023-10-01 15:20:00', endtime: '2023-10-01 16:10:00', expand: false, recommended: false, reason: '', from: '', to: '', suggestion: '' },
    { id : 26, vehicle: 'SGX23239', driver: 'Granger', container: 'B2545750', type: 'RF', status: 'Pending', starttime: '2023-10-01 13:45:00', endtime: '2023-10-01 14:25:00', expand: false, recommended: false, reason: '', from: '', to: '', suggestion: '' },
    { id : 27, vehicle: 'SGR13238', driver: 'Hero', container: 'N09233420', type: 'RF', status: 'Pending', starttime: '2023-10-01 15:30:00', endtime: '2023-10-01 16:20:00', expand: false, recommended: true, reason: 'Road Closure near AYE', from: '', to: '', suggestion: 'Detour from original route' },
    { id : 28, vehicle: 'SGU23232', driver: 'Baru', container: 'L00643560', type: 'RF', status: 'Pending', starttime: '2023-10-01 12:30:00', endtime: '2023-10-01 13:30:00', expand: false, recommended: false, reason: '', from: '', to: '', suggestion: '' },
  ];

  filterList;

  constructor(private datePipe: DatePipe, private dialogService: DialogService) { 
    // this.pendingList.forEach((item) => {
    //   item.starttime = this.convertDate(item.starttime);
    //   item.endtime = this.convertDate(item.endtime);
    // })
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
