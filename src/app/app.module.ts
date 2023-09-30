import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, DatePipe } from '@angular/common';

// External Modules (UI)
import { ToastrModule } from 'ngx-toastr';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';

// Internal Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { DialogTemplateComponent } from './dialog/dialog-template/dialog-template.component';
import { GanttComponent } from './gantt/gantt.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SearchUserComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    DialogTemplateComponent,
    GanttComponent,
    ChartComponent
  ],
  imports: [
    // External Modules
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    MatTabsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    // Internal Modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [UserService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
