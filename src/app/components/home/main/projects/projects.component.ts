import { Component } from '@angular/core';
import { LoaderType } from 'src/app/components/common/loader/loaderType';
import { Alert } from 'src/app/model/alert';
import { Person } from 'src/app/model/person';
import { Project } from 'src/app/model/project';
import { AlertService } from 'src/app/service/alert.service';
import { PersonService } from 'src/app/service/person.service';
import { ProjectService } from 'src/app/service/project.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  personId!: number;
  projects!:Project[];

  constructor (
    private projectService: ProjectService,
    private tokenService: TokenService,
    private alertService: AlertService,
    private personService: PersonService
    ) { }
  
  loading: boolean = true;
  card: LoaderType = LoaderType.card;
  isLogged: boolean = false;
  isAdmin: boolean = false;
  adding: boolean = false;
  editing: boolean = false;
  deleting: boolean = false;

  selectedProject!: Project;

  ngOnInit(): void {
    this.loading = true;
    this.adding = this.editing = this.deleting = false;
    this.personService.person$.subscribe({next: person => {
      this.personId = person.id;
      this.getProjects();
    }})

    this.isLogged = this.tokenService.getToken() ? true : false;

    const authorities = this.tokenService.getAuthorities();

    this.isAdmin = authorities.includes("ROLE_ADMIN") ? true : false;
  }

  getProjects(): void {
    this.projectService.getAll(this.personId).subscribe({next: projects => {
      this.projects = projects
      this.loading = false;
    }})
  }

  addProject(project: Project): void {
    this.projectService.save(project).subscribe({next: data => {
      this.alertService.setAlert(new Alert(data.message, false))
      this.getProjects();
      this.toggleAdd();
    }, error: ({error}) => {
      this.alertService.setAlert(new Alert(error.message, true))
      console.log(error)
    }})
  }

  editProject(project: Project): void {
    this.projectService.update(project.id!, project).subscribe({next: data => {
      this.alertService.setAlert(new Alert(data.message, false))
      this.getProjects();
      this.toggleEdit();
    }, error: ({error}) => {
      this.alertService.setAlert(new Alert(error.message, true))
      console.log(error)
    }})
  }

  deleteProject(): void {
    this.projectService.delete(this.selectedProject.id!).subscribe({next: data => {
      this.alertService.setAlert(new Alert(data.message, false))
      this.getProjects();
      this.toggleDelete();
    }, error: ({error}) => {
      this.alertService.setAlert(new Alert(error.message, true))
      console.log(error);
    }})
  }

  toggleAdd(): void {
    this.adding = !this.adding;

    document.body.style.overflowY = this.adding ? "hidden" : "scroll"
  }

  toggleEdit(project?: Project): void {
    this.editing = !this.editing

    if (project) {
      this.selectedProject = project;
    }

    document.body.style.overflowY = this.editing ? "hidden" : "scroll"
  }

  toggleDelete(project?: Project): void {
    this.deleting = !this.deleting

    if (project) {
      this.selectedProject = project;
    }

    document.body.style.overflowY = this.deleting ? "hidden" : "scroll"
  }
}
