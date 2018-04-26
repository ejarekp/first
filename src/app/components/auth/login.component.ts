import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { WebService } from '../../services/web.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'

})



export class LoginComponent {
    

 constructor( private webService: WebService ){
   // this.webService.showSpinner = false;
 };

    

    loginData = {
        email:'',
        password: ''
    }


    login() {
    
    }


}   