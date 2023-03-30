import { Component } from '@angular/core';
import { Alert } from 'src/app/model/alert';
import { Skill } from 'src/app/model/skill';
import { AlertService } from 'src/app/service/alert.service';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills!: Skill[];

  constructor (
    private skillService: SkillService,
    private tokenService: TokenService,
    private alertService: AlertService
    ) { }
  
  isLogged: boolean = false;
  adding: boolean = false;
  editing: boolean = false;
  deleting: boolean = false;

  selectedSkill!: Skill;

  ngOnInit(): void {
    this.getSkills();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  getSkills(): void {
    this.skillService.getAll().subscribe({next: data => this.skills = data})
  }

  addSkill(skill: Skill): void {
    this.skillService.save(skill).subscribe({next: data => {
      this.alertService.setAlert(new Alert(data.message, false))
      this.getSkills();
      this.toggleAdd();
    }, error: ({error}) => {
      this.alertService.setAlert(new Alert(error.message, true))
      console.log(error)
    }})
  }

  editSkill(skill: Skill): void {
    this.skillService.update(skill.id!, skill).subscribe({next: data => {
      this.alertService.setAlert(new Alert(data.message, false))
      this.getSkills();
      this.toggleEdit();
    }, error: ({error}) => {
      this.alertService.setAlert(new Alert(error.message, true))
      console.log(error)
    }})
  }

  deleteSkill(): void {
    this.skillService.delete(this.selectedSkill.id!).subscribe({next: data => {
      this.alertService.setAlert(new Alert(data.message, false))
      this.getSkills();
      this.toggleDelete();
    }, error: ({error}) => {
      this.alertService.setAlert(new Alert(error.message, true))
      console.log(error)
    }})
  }

  toggleAdd(): void {
    this.adding = !this.adding;

    document.body.style.overflowY = this.adding ? "hidden" : "scroll"
  }

  toggleEdit(skill?: Skill): void {
    this.editing = !this.editing;

    document.body.style.overflowY = this.editing ? "hidden" : "scroll"

    if (skill) {
      this.selectedSkill = skill;
    }
  }

  toggleDelete(skill?: Skill): void {
    this.deleting = !this.deleting;

    document.body.style.overflowY = this.deleting ? "hidden" : "scroll"

    if (skill) {
      this.selectedSkill = skill;
    }
  }
}
