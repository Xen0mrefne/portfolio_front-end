import { Component } from '@angular/core';
import { Project } from './Project';
import { PROJECTS } from './project_list';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects:Project[] = PROJECTS;
}
