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
  modalOpen: boolean = false;

  ngOnInit():void {
    this.getExperience();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  getExperience(): void {
    this.experienceService.experienceList().subscribe(data => this.experiences = data)
  }

  toggleAdd():void {
    this.modalOpen = !this.modalOpen;
    if (this.modalOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }

  addExperience(experience: Experience): void {
    this.experienceService.save(experience).subscribe(data => {
      alert("Experience added Successfully")
      this.toggleAdd();
      this.getExperience();
    }, err => {
      alert("error")
      console.log(err)
      this.toggleAdd();
    })
  }

  editExperience(experience: Experience): void {
    this.experienceService.update(experience.id!, experience).subscribe(data => {
      alert("Experience edited Successfully")
      this.getExperience();
    }, err => {
      alert("error")
      console.log(err)
    })
  }

  deleteExperience(experience: Experience): void {
    this.experienceService.delete(experience.id!).subscribe(data => {
      alert("Experience deleted Successfully")
      this.getExperience();
    }, err => {
      alert("error")
      console.log(err)
    })
  }
 
}
