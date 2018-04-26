import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';



import { HttpClient } from '@angular/common/http';
import {IProjects} from './interfaces';
import { AppComponent } from '../app.component';



@Injectable()
export class WebService {


  readonly  BASE_URL = 'https://glanceapp.azurewebsites.net/api/';





     //public showSpinner: boolean = true;



    constructor(private http: HttpClient, private myApp: AppComponent) {
       
    }



    private handleError(errorMessage: string) {
        console.error(errorMessage);
      //  this.sb.open(errorMessage, 'close', { duration: 4000 });
    }




getProjects() {
        
    return this.http.get<IProjects>(this.BASE_URL + "projects")
}












}

