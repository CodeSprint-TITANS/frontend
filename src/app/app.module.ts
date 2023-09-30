import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// External Modules (UI)
import { ToastrModule } from 'ngx-toastr';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

// Internal Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { DialogTemplateComponent } from './dialog/dialog-template/dialog-template.component';
import { CardComponent } from './card/card.component';
import { TimetableComponent } from './timetable/timetable.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SearchUserComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    DialogTemplateComponent,
    CardComponent,
    TimetableComponent
  ],
  imports: [
    // External Modules
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    MatTabsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    // Internal Modules
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
