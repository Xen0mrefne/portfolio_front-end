import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Experience } from 'src/app/model/experience';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent {
  @Output() onExperienceEdit: EventEmitter<Experience> = new EventEmitter();
  @Output() onExperienceDelete: EventEmitter<Experience> = new EventEmitter();
  @Input() experience!: Experience;
  @Input() isLogged!: boolean;
  @Input() isAdmin!: boolean;

  editing: boolean = false;
  deleting: boolean = false;

  editExperience(): void {
    this.onExperienceEdit.emit(this.experience);
  }

  deleteExperience(): void {
    this.onExperienceDelete.emit(this.experience);
  }
}
