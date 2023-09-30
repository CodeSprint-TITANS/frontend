import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-template',
  templateUrl: './dialog-template.component.html',
  styleUrls: ['./dialog-template.component.css']
})
export class DialogTemplateComponent {
  @Output() dialogClosed = new EventEmitter<string>();
  closeDialog(result: string) {
    this.dialogClosed.emit(result);
  }
}
