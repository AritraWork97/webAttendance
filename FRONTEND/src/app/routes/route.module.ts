import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from '../home/home.component';
import {LoginComponent} from "../authentication/login/login.component";
import {RegisterComponent} from "../authentication/register/register.component";
import {ProfileComponent} from '../profile/profile.component';
import {AuthGaurdService} from '../models and services/Auth Gaurd/auth-gaurd.service';

const appRoutes : Routes = [
  {path : '', component : HomeComponent, pathMatch : 'full'},
 // {path : 'home', component : HomeComponent, pathMatch : 'full'},
  {path : 'login', component : LoginComponent, pathMatch : 'full'},
  {path : 'register', component : RegisterComponent, pathMatch : 'full'},
  {path : 'profile', component : ProfileComponent, pathMatch : 'full'}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RouteModule {


}
