import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Subject } from "rxjs/Rx";


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WebService {


    BASE_URL = 'https://glanceapp.azurewebsites.net/api/';





    showSpinner: boolean = true;



    constructor(private http: HttpClient) {
    }



    private handleError(errorMessage: string) {
        console.error(errorMessage);
      //  this.sb.open(errorMessage, 'close', { duration: 4000 });
    }


    getAll(url: string ){
        return this.http.get<IProjects>(this.BASE_URL + url);
      }
    


      


}

export interface IProjects {
    pr_name: string;
    pr_date_created: Date;
  }