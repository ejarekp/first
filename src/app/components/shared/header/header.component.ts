import { Component } from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'header-nav',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.css']

})


export class HeaderComponent {

    public _isAuthenticated: boolean = false;

    constructor(private auth: AuthService  ) {
        this._isAuthenticated = auth.isAuthenticated;
     };



}
