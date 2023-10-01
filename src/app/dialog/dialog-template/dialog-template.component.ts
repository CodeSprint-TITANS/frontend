import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-template',
  templateUrl: './dialog-template.component.html',
  styleUrls: ['./dialog-template.component.css'],
})
export class DialogTemplateComponent {
  @Output() dialogClosed = new EventEmitter<string>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(this.data);
  }

  closeDialog(result: string) {
    this.dialogClosed.emit(result);
  }
}
