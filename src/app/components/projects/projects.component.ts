import { Component } from '@angular/core';
import { WebService} from '../../services/web.service';
import { Observable } from 'rxjs/Observable';

import { AppComponent } from '../../app.component';
import { Subject } from "rxjs/Rx";
import { post } from 'selenium-webdriver/http';





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
       this.showConfig();
       this.posts = this.mySubjet;
    }




    private mySubjet = new Subject();
    public errMessage: string;
    showConfig() {
        this.webService.getProjects()
        .subscribe( resp =>  {
            this.mySubjet.next(resp);
            this.appComponent.showSpinner(false);
        }, error => {
            this.webService.handleError("Unable to get projects ! ");
            this.appComponent.showSpinner(false);
        });
      }






      










}
 


