import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import {FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';



@Component({
    selector: 'register',
    templateUrl: 'register.component.html'

})


export class RegisterComponent {

    form;

    constructor(private appComponent: AppComponent, private fb: FormBuilder, private auth: AuthService) {
        this.appComponent.showSpinner(false);

        this.form = fb.group({
            login: '',
            role: '',
            password: ''
        });


     };



     
     onSubmit(){
        //console.log(this.form.value);
        this.auth.register(this.form.value);
      }
  









}
 


