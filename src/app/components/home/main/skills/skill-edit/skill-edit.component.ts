import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-skill-edit',
  templateUrl: './skill-edit.component.html',
  styleUrls: ['./skill-edit.component.css']
})
export class SkillEditComponent {
  @Output() onEditConfirm: EventEmitter<Skill> = new EventEmitter();
  @Output() onCancelEdit: EventEmitter<any> = new EventEmitter();
  @Input() skill!: Skill;

  name!: string;
  percent: number = 0;
  personId!: number;

  ngOnInit(): void {
    this.name = this.skill.name;
    this.percent = this.skill.percent;
  }

  cancelEdit(): void {
    this.onCancelEdit.emit();
  }

  onSubmit(): void {
    const updatedSkill = new Skill(this.name, this.percent, this.skill.personId)
    updatedSkill.id = this.skill.id;

    this.onEditConfirm.emit(updatedSkill);
  }

  changePercent(amount: number): void {
    if (this.percent + amount > 100) {
      this.percent = 100;
      return;
    }
    if (this.percent + amount < 0) {
      this.percent = 0;
      return;
    }
    this.percent = this.percent + amount;
  }

}
