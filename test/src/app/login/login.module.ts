import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { DialogLogin, LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { LoginService } from './service/login.service';


@NgModule({
  declarations: [
    LoginComponent,
    DialogLogin
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  providers: [LoginService,DialogLogin]
})
export class LoginModule { }
