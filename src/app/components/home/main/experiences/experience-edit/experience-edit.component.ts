import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Experience } from 'src/app/model/experience';

@Component({
  selector: 'app-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.css']
})
export class ExperienceEditComponent {
  @Input() experience!: Experience;
  @Output() onCancelEdit: EventEmitter<any>= new EventEmitter();
  @Output() onEdit: EventEmitter<Experience>= new EventEmitter();

  position: string = "";
  company: string = "";
  description: string = "";

  ngOnInit():void {
    this.position = this.experience.name;
    this.company = this.experience.company;
    this.description = this.experience.description
  }

  onSubmit(): void {
    const updatedExperience = new Experience(this.position, this.company, this.description, this.experience.personId);
    updatedExperience.id = this.experience.id;
    

    this.onEdit.emit(updatedExperience)
  }

  closeModal(): void {
    this.onCancelEdit.emit();
  }
}
