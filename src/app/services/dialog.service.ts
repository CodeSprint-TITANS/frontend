import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTemplateComponent } from '../dialog/dialog-template/dialog-template.component';
import { MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class DialogService {

  dialogRef!: MatDialogRef<DialogTemplateComponent>;

  constructor(private dialog: MatDialog) { }

  openDialogTemplate(data: any ): MatDialogRef<DialogTemplateComponent> {
    const dialogRef = this.dialog.open(DialogTemplateComponent, {
      width: '500px',
      data: data,
    });
    
    return dialogRef;
    
  }

  closeAllDialogs() {
    this.dialog.closeAll();
  }
}
