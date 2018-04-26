import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/shared/header/header.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { LoginComponent } from './components/auth/login.component';
import { ProjectsComponent } from './components/projects/projects.component';

import {WebService} from './services/web.service';


import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [

  {
    path: 'login',
    component: LoginComponent
    // ,data: { title: 'Log' }
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'projects', component: ProjectsComponent }

  // { path: 'hero/:id',      component: HeroDetailComponent },
/*   ,{ path: '**', component: PageNotFoundComponent } */
];




@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    SpinnerComponent,
    LoginComponent,
    ProjectsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WebService, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
