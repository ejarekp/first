import { Http } from "@angular/http";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Subject } from "rxjs/Rx";


@Injectable()
export class WebService {


    BASE_URL = 'https://glanceapp.azurewebsites.net/api/';
    //BASE_URL = 'http://localhost:54786/api/';
    //BASE_URL = 'http://localhost:56430/api/';

    private myDataStore = [];
    private mySubjet = new Subject();
    myData = this.mySubjet.asObservable();


    showSpinner: boolean = true;



    constructor(private http: Http) {
    }



    private handleError(errorMessage: string) {
        console.error(errorMessage);
      //  this.sb.open(errorMessage, 'close', { duration: 4000 });
    }


    getAll(url: string) {
            this.http.get(this.BASE_URL + url )
            .subscribe( reposnse =>  {
               
                this.myDataStore = reposnse.json();
                this.mySubjet.next(this.myDataStore);

                this.showSpinner = false;
            }, error => {
                this.handleError("Unable to get Data");
              
                
            }

        )  ;
         
    };
    


      


}