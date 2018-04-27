import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import {IProjects} from './interfaces';
//import { AppComponent } from '../app.component';

import { MatSnackBar } from "@angular/material";


@Injectable()
export class WebService {


  readonly  BASE_URL = 'https://glanceapp.azurewebsites.net/api/';



    constructor(private http: HttpClient, private sb: MatSnackBar ) {
       
    }




getProjects() {
        
    return this.http.get<IProjects>(this.BASE_URL + "projects")
}



public handleError(errorMessage){
    console.error(errorMessage);
    this.sb.open(errorMessage, '', {duration:3000, extraClasses: ['blue-snackbar']});
}









}

