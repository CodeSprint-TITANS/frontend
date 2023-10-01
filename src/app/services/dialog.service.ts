import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTemplateComponent } from '../dialog/dialog-template/dialog-template.component';
import { MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) { }

  openDialogTemplate(data: any ): MatDialogRef<DialogTemplateComponent> {

    return this.dialog.open(DialogTemplateComponent,{
      width: '500px',
      data: data}
      );
  }
}
