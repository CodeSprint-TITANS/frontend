import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from 'src/app/map/map.component';
import { GanttComponent } from './gantt/gantt.component';
import { SearchUserComponent } from './search-user/search-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'map', component: MapComponent },
  { path: 'search-user', component: SearchUserComponent },
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'home', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'gantt', component: GanttComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
