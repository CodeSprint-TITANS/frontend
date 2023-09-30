import { Component, OnInit } from '@angular/core';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private dialogService : DialogService) {
    
  }

  
  ngOnInit(): void {
      
  }

  openDialog() {
    console.log('open modal');
    this.dialogService.openDialogTemplate();
  }
}
