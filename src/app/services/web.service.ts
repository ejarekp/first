import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Subject } from "rxjs/Rx";


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



    





      private mySubjet = new Subject();
      public myProjects = this.mySubjet.asObservable();




      getProjects() {
        this.http.get<IProjects>(this.BASE_URL + "projects")
        .subscribe( resp =>  {
           
   
            this.mySubjet.next(resp);

            this.myApp.showSpin = false;
        }, error => {
            this.handleError("Unable to get Data");
          
            
        }

    )  ;
     
};



}

