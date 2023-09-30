import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from './services/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'TITANS';

  isLoading: boolean = false;

  constructor(private toastr: ToastrService, private loaderService: LoaderService) { }

  ngOnInit() {
    this.toastr.success('Hello world!', 'Toastr fun!');

    this.loaderService.showLoader$.subscribe((showLoader) => {
      this.isLoading = showLoader;
    });

  }

}