import { Component } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
// import Image1 from '../../../../assets/image/location.png';

// import * as Image1 from 'assets/image/location.png';


@Component({
  selector: 'app-explain-dialog',
  templateUrl: './explain-dialog.component.html',
  styleUrls: ['./explain-dialog.component.css']
})
export class ExplainDialogComponent {

  constructor(private dialogService: DialogService) { }

  closeDialog(){
    this.dialogService.closeAllDialogs();
  }

}
