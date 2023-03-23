import { Component } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  experiences: Experience[] = [];

  constructor(private experienceService: ExperienceService, private tokenService: TokenService) {}

  isLogged: boolean = false;
  adding: boolean = false;

  ngOnInit():void {
    this.getExperience();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  getExperience(): void {
    this.experienceService.getAll().subscribe({next: data => this.experiences = data})
  }

  toggleAdd():void {
    this.adding = !this.adding;
    if (this.adding) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }

  addExperience(experience: Experience): void {
    this.experienceService.save(experience).subscribe({next: data => {
      alert(data.message)
      this.toggleAdd();
      this.getExperience();
    },error: err => {
      alert(err.error.message)
      console.log(err)
      this.toggleAdd();
    }})
  }

  editExperience(experience: Experience): void {
    this.experienceService.update(experience.id!, experience).subscribe({next: data => {
      alert(data.message)
      this.getExperience();
    }, error: err => {
      alert(err.error.message)
      console.log(err)
    }})
  }

  deleteExperience(experience: Experience): void {
    this.experienceService.delete(experience.id!).subscribe({next: data => {
      alert(data.message)
      this.getExperience();
    }, error: err => {
      alert(err.error.message)
      console.log(err)
    }})
  }
 
}
