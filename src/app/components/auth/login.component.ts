import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { WebService } from '../../services/web.service';
import { AppComponent } from '../../app.component';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'

})



export class LoginComponent {
    

 constructor( private webService: WebService, private myApp: AppComponent ){
    this.myApp.showSpinner(false);
 };

    

    loginData = {
        email:'',
        password: ''
    }


    login() {
    
    }


}   