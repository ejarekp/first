import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {IProjects, IUser} from './interfaces';

import { MatSnackBar } from "@angular/material";
import {AuthService} from "./auth.service";
import { Observable } from 'rxjs/Observable';
import { tokenKey } from '@angular/core/src/view';


@Injectable()
export class WebService {


readonly  BASE_URL = 'https://glanceapp.azurewebsites.net/api/';
//BASE_URL = 'http://localhost:54141/api/';



    constructor(private httpClient: HttpClient, private sb: MatSnackBar, private auth: AuthService ) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'my-auth-token'
            })
          };
    }









    getProjects(): Observable<IProjects> {
    return this.httpClient.get<IProjects>(this.BASE_URL + "projects", this.auth.tokenHeader );
} 





public handleErrorWeb(errorMessage){
    console.error(errorMessage);
    this.sb.open(errorMessage, '', {duration:3000, extraClasses: ['red-snackbar']});
}





getUser(){

    return this.httpClient.get<IUser>(this.BASE_URL + "users/me", this.auth.tokenHeader );
 };









}

