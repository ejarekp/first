import { Component } from '@angular/core';
import { WebService } from '../../services/web.service';
import { AppComponent } from '../../app.component';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'

})



export class LoginComponent {
    

 constructor( private webService: WebService, private appComponent: AppComponent, private auth: AuthService  ){
    this.appComponent.showSpinner(false);
    this.appComponent.showNavbar(false);
 };

    

    loginData = {
        login:'',
        password: ''
    }


    login() {

        this.auth.login(this.loginData);
        this.appComponent.showNavbar(true);

    }


}   