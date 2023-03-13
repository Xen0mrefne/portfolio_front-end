import { Component, Input } from '@angular/core';
import { Skill } from '../Skill';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent {
  @Input() skill!: Skill;
}
