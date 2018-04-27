import {Injectable} from '@angular/core';
//import {Http, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient,  } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';




@Injectable()
export class AuthService{

    //BASE_URL = 'http://localhost:54141/auth/';
    readonly  BASE_URL = 'https://glanceapp.azurewebsites.net/auth/';
    TOKEN_KEY = 'token';
    LOGIN_KEY = 'login';
    ROLE_KEY = 'role';

  constructor(private http: HttpClient, private router: Router ){}




register(user){
    this.http.post(this.BASE_URL + 'register', user)
    .subscribe( (res: {token: string, login: string, role: number } ) => 
    { 
        this.authenticate(res);
     });
}





logout(){
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.LOGIN_KEY);
    localStorage.removeItem(this.ROLE_KEY);
    console.log("logout");
}






login(loginData){
    this.http.post(this.BASE_URL + 'login', loginData).subscribe(res =>
    {
        this.authenticate(res);
        this.router.navigate(['/projects']);
    });


   
}


authenticate(res){
if (res.token)
        {
            localStorage.setItem(this.TOKEN_KEY , res.token);
            localStorage.setItem(this.LOGIN_KEY , res.login);
            localStorage.setItem(this.ROLE_KEY , res.role.toString() );
            this.router.navigate(['/']);
        }
else
        {
            return;
        }
}






get name(){
    return localStorage.getItem(this.LOGIN_KEY);
}

get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
}






}

