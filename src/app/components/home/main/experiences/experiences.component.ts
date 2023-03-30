import { Component } from '@angular/core';
import { Alert } from 'src/app/model/alert';
import { Experience } from 'src/app/model/experience';
import { AlertService } from 'src/app/service/alert.service';
import { ExperienceService } from 'src/app/service/experience.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  experiences: Experience[] = [];

  constructor(
    private experienceService: ExperienceService,
    private tokenService: TokenService,
    private alertService: AlertService
    ) { }

  isLogged: boolean = false;
  adding: boolean = false;
  editing: boolean = false;
  deleting: boolean = false;

  selectedExperience!: Experience;

  ngOnInit(): void {
    this.getExperience();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  getExperience(): void {
    this.experienceService.getAll().subscribe({ next: data => this.experiences = data })
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
        this.getExperience();
      }, error: ({error}) => {
        this.alertService.setAlert(new Alert(error.message, true))
        console.log(error)
        this.toggleAdd();
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
        this.getExperience();
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
        this.getExperience();
        this.toggleDelete();
      }, error: ({error}) => {
        this.alertService.setAlert(new Alert(error.message, true))
        console.log(error)
      }
    })
  }

}
