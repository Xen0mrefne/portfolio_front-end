import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent {
  @Output() onEdit: EventEmitter<Skill> = new EventEmitter();
  @Output() onDelete: EventEmitter<Skill> = new EventEmitter();
  @Input() skill!: Skill;
  @Input() isLogged!: boolean;
  @Input() isAdmin!: boolean;


  editSkill(): void {
    this.onEdit.emit(this.skill);
  }

  deleteSkill(): void {
    this.onDelete.emit(this.skill);
  }
}
