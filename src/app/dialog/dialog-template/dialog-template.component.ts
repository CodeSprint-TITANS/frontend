import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-dialog-template',
  templateUrl: './dialog-template.component.html',
  styleUrls: ['./dialog-template.component.css'],
})
export class DialogTemplateComponent {
  advices: string[];

  defaultAdvice : string[] = ['Postpone the date to 8.30am where traffic is less', 'Discard the job back into the pool', 'Reassign this job with Howard, who is able to complete the job at an earlier date', 'Go to the closest available timeslot (9am)'];

  @Output() dialogClosed = new EventEmitter<string>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogService : DialogService) { 
    console.log(this.data)
    this.advices = this.getRandomAdvices(2);
  }

  closeDialog(result: string) {
    this.dialogService.closeAllDialogs();
  }

  amendData() {
    this.data.recommended = false;
    if (this.data.suggestion == 'Swap the timeslot with another job') {
      this.data.starttime = '2023-10-01 09:00:00';
      this.data.endtime = '2023-10-01 09:30:00';
    }
    this.dialogService.closeAllDialogs();
  }

  getRandomAdvices(count: number): string[] {
    const randomIndexes: number[] = [];
    const selectedAdvices: string[] = [];

    while (randomIndexes.length < count) {
      const randomIndex = Math.floor(Math.random() * this.defaultAdvice.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
        selectedAdvices.push(this.defaultAdvice[randomIndex]);
      }
    }

    return selectedAdvices;
  }
}
