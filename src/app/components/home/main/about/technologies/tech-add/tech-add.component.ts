import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tech } from 'src/app/model/tech';
import { TechType } from 'src/app/model/techType';

@Component({
  selector: 'app-tech-add',
  templateUrl: './tech-add.component.html',
  styleUrls: ['./tech-add.component.css']
})
export class TechAddComponent {
  @Output() onAdd: EventEmitter<Tech> = new EventEmitter();
  @Input() techType!: TechType;
  @Input() personId!: number;

  adding: boolean = false;
  techName!: string;

  toggleAdd(): void {
    this.adding = !this.adding
    this.techName = "";
  }

  onSubmit(): void {
    const newTech = new Tech(this.techName, this.techType, this.personId)

    this.onAdd.emit(newTech)
    this.techName = "";
    this.toggleAdd();
  }
}
