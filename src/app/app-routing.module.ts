import { UsersComponent } from './users/users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule'
  },
  {
    path: 'registration',
    loadChildren: './registration/registration.module#RegistrationModule'
  }
];
*/

@NgModule({
 // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
