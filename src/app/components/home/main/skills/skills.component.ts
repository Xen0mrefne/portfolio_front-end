import { Component } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills!: Skill[];

  constructor (private skillService: SkillService, private tokenService: TokenService) { }
  
  isLogged: boolean = false;
  adding: boolean = false;

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
      alert(data.message)
      this.getSkills();
      this.toggleAdd();
    }, error: err => {
      alert(err.error.message)
      console.log(err)
    }})
  }

  editSkill(skill: Skill): void {
    this.skillService.update(skill.id!, skill).subscribe({next: data => {
      alert(data.message);
      this.getSkills();
    }, error: err => {
      alert(err.error.message)
    }})
  }

  deleteSkill(skill: Skill): void {
    this.skillService.delete(skill.id!).subscribe({next: data => {
      alert(data.message);
      this.getSkills();
    }, error: err => {
      alert(err.error.message);
      this.getSkills();
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
