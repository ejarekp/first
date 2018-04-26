import { Component } from '@angular/core';
import { WebService } from './services/web.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  public showSpin: boolean = true;

  constructor(  ) {

    
   };


   showSpinner(show: boolean){
    this.showSpin = show;
   }

 






}
