import { Component } from '@angular/core';
import { WebService } from '../../services/web.service';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'projects',
    templateUrl: 'projects.component.html'

})


export class ProjectsComponent {



    constructor(private webService: WebService) { };


    public posts: Observable<any>;

    ngOnInit() {
       this.posts = this.webService.getAll('projects');
       
    }

}


export interface IProjects {
    pr_name: string;
    pr_date_created: Date;
  }

