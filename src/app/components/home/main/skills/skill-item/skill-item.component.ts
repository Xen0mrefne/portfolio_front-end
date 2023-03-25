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

  editing: boolean = false;
  deleting: boolean = false;

  toggleEdit(): void {
    this.editing = !this.editing

    if(this.editing){
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }

  confirmEdit(skill: Skill): void {
    this.onEdit.emit(skill);
    this.toggleEdit();
  }

  toggleDelete(): void {
    this.deleting = !this.deleting

    if(this.deleting){
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }

  confirmDelete(): void {
    this.onDelete.emit(this.skill);
    this.toggleDelete();
  }
}
