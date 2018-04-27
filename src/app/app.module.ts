import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/shared/header/header.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';


import { LoginComponent } from './components/auth/login.component';
import {RegisterComponent} from './components/auth/register.component';

import { ProjectsComponent } from './components/projects/projects.component';

import {WebService} from './services/web.service';
import {AuthService} from './services/auth.service';

import { RouterModule, Routes } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
   MatSnackBarModule
  // ,MatButtonModule
  // , MatCheckboxModule 
  // , MatCardModule
  // , MatInputModule
  // , MatToolbarModule
 } from '@angular/material';

  

const appRoutes: Routes = [

  {
    path: 'login',
    component: LoginComponent
    // ,data: { title: 'Log' }
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
  ,{ path: 'projects', component: ProjectsComponent }
  ,{ path: 'register', component: RegisterComponent }

  // { path: 'hero/:id',      component: HeroDetailComponent },
/*   ,{ path: '**', component: PageNotFoundComponent } */

];




@NgModule({
  declarations: [
    AppComponent

    , HeaderComponent
    , SpinnerComponent
  
    , LoginComponent
    , RegisterComponent

    , ProjectsComponent

  ],
  imports: [
    BrowserModule
    ,HttpClientModule
    ,FormsModule, ReactiveFormsModule

    , BrowserAnimationsModule
    , MatSnackBarModule
    // , MatCheckboxModule
    // , MatButtonModule
    // , MatCardModule
    // , MatInputModule
    // , MatToolbarModule

    ,RouterModule.forRoot(appRoutes)

  ],
  providers: [WebService, AppComponent, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
