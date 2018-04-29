import { Component } from '@angular/core';
import { WebService} from '../../services/web.service';
import { Observable } from 'rxjs/Observable';

import { AppComponent } from '../../app.component';
import { Subject } from "rxjs/Rx";
import { post } from 'selenium-webdriver/http';
import {IProjects} from '../../services/interfaces';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ObserveOnOperator } from 'rxjs/operators/observeOn';




@Component({
    selector: 'projects',
    templateUrl: 'projects.component.html'

})


export class ProjectsComponent {



    constructor(private webService: WebService, private appComponent: AppComponent) {
        this.appComponent.showNavbar(true);
        
     };

    // , private sb: MatSnackBar

    public posts: Observable<any>;

    ngOnInit() {
       this.webService.getUser().subscribe();
       this.showProjects();

       this.posts = this.mySubjet;
      

    }





 //   obsProjects: Observable<IProjects[]>
//     showProjects() {
//         this.obsProjects = this.webService.getProjects();
//  }






    public projects: IProjects;
    private mySubjet = new Subject();

    showProjects() {
    this.webService.getProjects().subscribe(
      res => { 
          this.projects = res;
          this.mySubjet.next(this.projects);

          this.appComponent.showSpinner(false);			  
      },
      err => {
          this.webService.handleErrorWeb("Unable to get projects ! ");
          this.appComponent.showSpinner(false);
      }
   );	   
} 






      










}
 


