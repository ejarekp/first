import {Injectable} from '@angular/core';
//import {Http, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
//import { Headers, RequestOptions } from '@angular/http';
import { MatSnackBar } from "@angular/material";
import {IUser} from './interfaces';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class AuthService{

    readonly  BASE_URL = 'https://glanceapp.azurewebsites.net/auth/';
    //BASE_URL = 'http://localhost:54141/auth/';
    
    TOKEN_KEY = 'token';
    LOGIN_KEY = 'login';
    ROLE_KEY = 'role';

  constructor(private httpClient: HttpClient, private router: Router, private sb: MatSnackBar){}




register(user){
    this.httpClient.post<IUser>(this.BASE_URL + 'register', user , this.tokenHeader )
    .subscribe( res => 
    { 
        
        this.authenticate(res);
        this.router.navigate(['/']);
     });
}





logout(){
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.LOGIN_KEY);
    localStorage.removeItem(this.ROLE_KEY);
}








login(loginData){
    this.httpClient.post<IUser>(this.BASE_URL + 'login', loginData).subscribe(res =>
    {
        this.authenticate(res);
        this.router.navigate(['/projects']);
    }, error => {
        this.handleErrorAuth("Login or Password incorrect");
    });
    
;
}










authenticate(res){
if (res.token)
        {
            localStorage.setItem(this.TOKEN_KEY , res.token);
            localStorage.setItem(this.LOGIN_KEY , res.login);
            localStorage.setItem(this.ROLE_KEY , res.role.toString() );
            
        }
else
        {
            return;
        }
};















get name(){
    return localStorage.getItem(this.LOGIN_KEY);
};

get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
};




get tokenHeader() {
    const headers = new HttpHeaders({ 
        'Authorization': 'Bearer ' + localStorage.getItem(this.TOKEN_KEY)
    });

    const options = { headers: headers };
    return options;
}







public handleErrorAuth(errorMessage){
    console.error(errorMessage);
    this.sb.open(errorMessage, '', {duration:3000, extraClasses: ['green-snackbar']});
}




}













