import { Component } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects!:Project[];

  constructor (private projectService: ProjectService, private tokenService: TokenService) { }
  
  isLogged: boolean = false;
  adding: boolean = false;

  ngOnInit(): void {
    this.getProjects();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  getProjects(): void {
    this.projectService.getAll().subscribe({next: data => this.projects = data})
  }

  addProject(project: Project): void {
    this.projectService.save(project).subscribe({next: data => {
      alert(data.message)
      this.getProjects();
      this.toggleAdd();
    }, error: err => {
      alert(err.error.message)
      console.log(err)
    }})
  }

  editProject(project: Project): void {
    this.projectService.update(project.id!, project).subscribe({next: data => {
      alert(data.message);
      this.getProjects();
    }, error: err => {
      alert(err.error.message)
    }})
  }

  deleteProject(project: Project): void {
    this.projectService.delete(project.id!).subscribe({next: data => {
      alert(data.response);
      this.getProjects();
    }, error: err => {
      alert(err.error.message);
      this.getProjects();
    }})
  }

  toggleAdd(): void {
    this.adding = !this.adding;

    if(this.adding){
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }
}
