import {Injectable} from '@angular/core';
//import {Http, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient,  } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { MatSnackBar } from "@angular/material";



@Injectable()
export class AuthService{

    //BASE_URL = 'http://localhost:54141/auth/';
    readonly  BASE_URL1 = 'https://glanceapp.azurewebsites.net/auth/';
    readonly  BASE_URL2 = 'https://glanceapp.azurewebsites.net/api/';
    TOKEN_KEY = 'token';
    LOGIN_KEY = 'login';
    ROLE_KEY = 'role';

  constructor(private http: HttpClient, private router: Router, private sb: MatSnackBar){}




register(user){
    this.http.post<IUser>(this.BASE_URL1 + 'register', user)
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
    this.http.post<IUser>(this.BASE_URL1 + 'login', loginData).subscribe(res =>
    {
        this.authenticate(res);
        this.router.navigate(['/projects']);
    }, error => {
        this.handleError("Login or Password incorrect");
    });
    

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
}





getUser(){
   return this.http.get<IUser>(this.BASE_URL2 + "users/me");

}







get name(){
    return localStorage.getItem(this.LOGIN_KEY);
}

get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
}


public handleError(errorMessage){
    console.error(errorMessage);
    this.sb.open(errorMessage, '', {duration:3000, extraClasses: ['blue-snackbar']});
}



}










export interface IUser {
    ser_id: number;
    login: string;
    role: number;
    password: string;
  }
