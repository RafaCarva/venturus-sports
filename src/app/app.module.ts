import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonRegistrationComponent } from './registration/person-registration/person-registration.component';
import { UsersComponent } from './users/users/users.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from './design-components/breadcrumb/breadcrumb.component';

const appRouters: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'registration', component: PersonRegistrationComponent},
  {path: '', pathMatch: 'full', redirectTo: 'users'},
  {path: '**', component: PageNotFoundComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PersonRegistrationComponent,
    PageNotFoundComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,

    // AppRoutingModule,
     RouterModule.forRoot(appRouters),
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
