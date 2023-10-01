import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTemplateComponent } from '../dialog/dialog-template/dialog-template.component';
import { MatDialogRef } from '@angular/material/dialog';
import { ExplainDialogComponent } from '../dialog/explain-dialog/explain-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {

  dialogRef!: MatDialogRef<DialogTemplateComponent>;

  constructor(private dialog: MatDialog) { }

  openDialogTemplate(data: any ): MatDialogRef<DialogTemplateComponent> {
    const dialogRef = this.dialog.open(DialogTemplateComponent, {
      position: { top: '0' },
      width: '500px',
      data: data,
    });
    
    return dialogRef;
    
  }

  openDialogExplain(): MatDialogRef<ExplainDialogComponent> {
    const dialogRef = this.dialog.open(ExplainDialogComponent, {
      position: { top: '0' },
      width: '600px',
      height: '400px',

    });
    
    return dialogRef;
    
  }

  closeAllDialogs() {
    this.dialog.closeAll();
  }
}
