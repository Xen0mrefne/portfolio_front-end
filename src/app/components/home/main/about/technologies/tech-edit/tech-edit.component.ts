import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tech } from 'src/app/model/tech';

@Component({
  selector: 'app-tech-edit',
  templateUrl: './tech-edit.component.html',
  styleUrls: ['./tech-edit.component.css']
})
export class TechEditComponent {
  @Output() onCancelEdit: EventEmitter<any> = new EventEmitter();
  @Output() onConfirmEdit: EventEmitter<Tech> = new EventEmitter();
  @Input() tech!: Tech;

  name!: string;

  ngOnInit(): void {
    this.name = this.tech.name
  }

  onSubmit(): void {
    const updatedTech = new Tech(this.name, this.tech.techType, this.tech.personId);
    updatedTech.id = this.tech.id;

    this.onConfirmEdit.emit(updatedTech)
  }

  cancelEdit(): void {
    this.onCancelEdit.emit();
  }
}
