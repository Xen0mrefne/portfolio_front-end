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

  editing: boolean = false;
  deleting: boolean = false;

  toggleEdit():void {
    this.editing = !this.editing;
    if (this.editing) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }

  toggleDelete():void {
    this.deleting = !this.deleting;
    if (this.deleting) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }

  confirmEdit(experience: Experience): void {
    this.onExperienceEdit.emit(experience);
    this.toggleEdit();
  }

  confirmDelete():void {
    this.onExperienceDelete.emit(this.experience)
    this.toggleDelete();
  }
}
