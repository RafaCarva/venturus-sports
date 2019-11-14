import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonRegistrationComponent } from './person-registration/person-registration.component';


const routes: Routes = [
  {path: 'registration', component: PersonRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
