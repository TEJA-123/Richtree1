import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SqrtPipe } from './sqrt.pipe';
import { ChangetextDirective } from './changetext.directive';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';




@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    ChangetextDirective,
    SidebarComponent,
    UserinfoComponent,
    RegComponent,
    LoginComponent,
    ProjectComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
