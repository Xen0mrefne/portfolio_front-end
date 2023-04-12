import { Component } from '@angular/core';
import { LoaderType } from 'src/app/components/common/loader/loaderType';
import { Alert } from 'src/app/model/alert';
import { Experience } from 'src/app/model/experience';
import { AlertService } from 'src/app/service/alert.service';
import { ExperienceService } from 'src/app/service/experience.service';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  experiences: Experience[] = [];
  personId!: number;

  constructor(
    private experienceService: ExperienceService,
    private tokenService: TokenService,
    private alertService: AlertService,
    private personService: PersonService,
    ) { }

  loading: boolean = true;
  card: LoaderType = LoaderType.card
  isLogged: boolean = false;
  isAdmin: boolean = false;
  adding: boolean = false;
  editing: boolean = false;
  deleting: boolean = false;

  selectedExperience!: Experience;

  ngOnInit(): void {
    this.loading = true;
    this.adding = this.editing = this.deleting = false;
    this.personService.person$.subscribe({next: person => {
      this.personId = person.id;
      this.getExperiences();
    }})

    this.isLogged = this.tokenService.getToken() ? true : false;

    const authorities = this.tokenService.getAuthorities();

    this.isAdmin = authorities.includes("ROLE_ADMIN") ? true : false;
  }

  getExperiences(): void {
    this.experienceService.getAll(this.personId).subscribe({ next: experiences => {
      this.experiences = experiences
      this.loading = false
    } })
  }

  toggleAdd(): void {
    this.adding = !this.adding;
    if (this.adding) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }

  addExperience(experience: Experience): void {
    this.experienceService.save(experience).subscribe({
      next: data => {
        this.alertService.setAlert(new Alert(data.message, false))
        this.toggleAdd();
        this.getExperiences();
      }, error: ({error}) => {
        this.alertService.setAlert(new Alert(error.message, true))
        console.log(error)
      }
    })
  }

  toggleEdit(experience?: Experience): void {
    this.editing = !this.editing;

    document.body.style.overflowY = this.editing ? "hidden" : "scroll"

    if (experience) {
      this.selectedExperience = experience;
    }
  }

  toggleDelete(experience?: Experience): void {
    this.deleting = !this.deleting;

    document.body.style.overflowY = this.deleting ? "hidden" : "scroll"

    if (experience) {
      this.selectedExperience = experience;
    }
  }

  editExperience(experience: Experience): void {
    this.experienceService.update(experience.id!, experience).subscribe({
      next: data => {
        this.alertService.setAlert(new Alert(data.message, false))
        this.getExperiences();
        this.toggleEdit();
      }, error: ({error}) => {
        this.alertService.setAlert(new Alert(error.message, true))
        console.log(error)
      }
    })
  }

  deleteExperience(): void {
    this.experienceService.delete(this.selectedExperience.id!).subscribe({
      next: data => {
        this.alertService.setAlert(new Alert(data.message, false))
        this.getExperiences();
        this.toggleDelete();
      }, error: ({error}) => {
        this.alertService.setAlert(new Alert(error.message, true))
        console.log(error)
      }
    })
  }

}
