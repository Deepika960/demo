import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from 'src/app/dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from 'src/app/dashboard-user/dashboard-user.component';
import { AuthGuard } from 'src/app/gaurd/auth.guard';
import { UserlistingComponent } from 'src/app/userlisting/userlisting.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserlistingComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardUserComponent
      },
    ],
    canActivate:[AuthGuard]
  },
  {
    path: 'admin',
    children:[ {
      path: 'dashboard',
      component: DashboardAdminComponent
    }],
    canActivate:[AuthGuard]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
