import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserinfoComponent } from './userinfo/userinfo.component';
import {RegComponent} from './reg/reg.component';
import {LoginComponent} from './login/login.component';
import { ProjectComponent} from './project/project.component';
const routes: Routes = [
  // {path: 'home', component: HomeComponent},
  // {path: 'contactus', component: ContactusComponent}
  {path: 'userinfo', component: UserinfoComponent},
  {path: 'register', component: RegComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'project' , component:ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const RoutingComponent = [];
