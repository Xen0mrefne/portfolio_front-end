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

  modalOpen: boolean = false;

  toggleEdit():void {
    this.modalOpen = !this.modalOpen;
    if (this.modalOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }

  onConfirmEdit(experience: Experience): void {
    this.onExperienceEdit.emit(experience);
  }

  onDelete():void {
    this.onExperienceDelete.emit(this.experience)
  }
}
