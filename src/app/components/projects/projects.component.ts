import { Component } from '@angular/core';
import { WebService } from '../../services/web.service';

@Component({
    selector: 'projects',
    templateUrl: 'projects.component.html'

})


export class ProjectsComponent {



    constructor(private webService: WebService) { };


    ngOnInit() {
       this.webService.getAll('projects');

       
    }

}

