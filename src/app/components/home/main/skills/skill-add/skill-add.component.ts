import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-skill-add',
  templateUrl: './skill-add.component.html',
  styleUrls: ['./skill-add.component.css']
})
export class SkillAddComponent {
  @Output() onAdd: EventEmitter<Skill> = new EventEmitter();
  @Output() onCancelAdd: EventEmitter<any> = new EventEmitter();
  @Input() personId!: number;

  name!: string;
  percent: number = 0;

  onSubmit(): void {
    const newSkill = new Skill(this.name, this.percent, this.personId);

    this.onAdd.emit(newSkill);
  }

  cancelAdd(): void {
    this.onCancelAdd.emit();
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
