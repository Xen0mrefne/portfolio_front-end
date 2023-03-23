import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Degree } from '../../../../../model/degree';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.css']
})
export class DegreeComponent {
  @Output() onEdit: EventEmitter<Degree> = new EventEmitter()
  @Output() onDelete: EventEmitter<Degree> = new EventEmitter()
  @Input() degree!: Degree;
  @Input() isLogged!: boolean;

  editing: boolean = false;
  deleting: boolean = false;

  toggleEdit(): void {
    this.editing = !this.editing;
    if (this.editing) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }

  toggleDelete(): void {
    this.deleting = !this.deleting;
    if (this.deleting) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }

  confirmEdit(degree: Degree): void {
    this.toggleEdit();
    this.onEdit.emit(degree);
  }

  confirmDelete(): void {
    this.toggleDelete();
    this.onDelete.emit(this.degree)
  }

}
