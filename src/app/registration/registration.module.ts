import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { PersonRegistrationComponent } from './person-registration/person-registration.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: PersonRegistrationComponent}
];

@NgModule({
  declarations: [PersonRegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }