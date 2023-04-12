import { Component, Input } from '@angular/core';
import { LoaderType } from 'src/app/components/common/loader/loaderType';
import { Alert } from 'src/app/model/alert';
import { Tech } from 'src/app/model/tech';
import { TechType } from 'src/app/model/techType';
import { AlertService } from 'src/app/service/alert.service';
import { PersonService } from 'src/app/service/person.service';
import { TechnologiesService } from 'src/app/service/technologies.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  frontTechs!: Tech[];
  backTechs!: Tech[];
  personId!: number;

  frontEndType: TechType = TechType.FRONTEND;
  backEndType: TechType = TechType.BACKEND;

  loading: boolean = true;
  card: LoaderType = LoaderType.card
  isLogged: boolean = false;
  isAdmin: boolean = false;
  editing: boolean = false;

  selectedTech!: Tech;

  constructor (
    private techService: TechnologiesService,
    private tokenService: TokenService,
    private alertService: AlertService,
    private personService: PersonService
    ) {}

  ngOnInit(): void {
    this.loading = true;
    this.editing = false;
    this.personService.person$.subscribe({next: person => {
      this.personId = person.id;
      this.getTechs();
    }})

    this.isLogged = this.tokenService.getToken() ? true : false;

    const authorities = this.tokenService.getAuthorities();

    this.isAdmin = authorities.includes("ROLE_ADMIN") ? true : false;
  }

  getTechs(): void {
    this.techService.getAll(this.personId).subscribe({next: data => {
      this.frontTechs = data.filter(tech => tech.techType === this.frontEndType)
      this.backTechs = data.filter(tech => tech.techType === this.backEndType)
      this.loading = false;
    }})
  }

  addTech(tech: Tech): void {
    this.techService.save(tech).subscribe({next: data => {
      this.getTechs();
    }, error: ({error}) => {
      this.alertService.setAlert(new Alert(error.message, true))
    }})
  }


  editTech(tech: Tech): void {
    this.techService.update(tech.id!, tech).subscribe({next: data => {
      this.getTechs();
      this.toggleEdit();
    }, error: ({error}) => {
      this.alertService.setAlert(new Alert(error.message, true))
    }})
  }
  

  deleteTech(tech: Tech): void {
    this.techService.delete(tech.id!).subscribe({next: data => {
      this.getTechs();
    }, error: ({error}) => {
      this.alertService.setAlert(new Alert(error.message, true))
    }})
  }

  toggleEdit(tech?: Tech): void {
    this.editing = !this.editing

    if (tech) {
      this.selectedTech = tech;
    }

    document.body.style.overflowY = this.editing ? "hidden" : "scroll"
  }
}
