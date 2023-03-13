import { Component } from '@angular/core';
import { Skill } from './Skill';
import { SKILLS } from './skill_list';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = SKILLS;
}
