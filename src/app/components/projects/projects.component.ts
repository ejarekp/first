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
       this.webService.getProjects();
       this.posts = this.webService.myProjects;
       
    }

}
 


