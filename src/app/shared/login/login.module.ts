import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { DashboardAdminComponent } from 'src/app/dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from 'src/app/dashboard-user/dashboard-user.component';
import { UserlistingComponent } from 'src/app/userlisting/userlisting.component';


@NgModule({
  declarations: [
    DashboardAdminComponent,
    DashboardUserComponent,
    UserlistingComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    
  ]
})
export class LoginModule { }
