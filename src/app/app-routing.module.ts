import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { LoginComponent } from './login/login.component';
import { GanttComponent } from './gantt/gantt.component';

const routes: Routes = [
  {
    path: "", component: LoginComponent, pathMatch: "full"},
      { path: "login", component: LoginComponent },
      { path: "register", component: RegistrationComponent },
      { path: "search-user", component: SearchUserComponent },
      { path: "gantt", component: GanttComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
