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
  @Input() isAdmin!: boolean;

  editDegree(): void {
    this.onEdit.emit(this.degree);
  }

  deleteDegree(): void {
    this.onDelete.emit(this.degree)
  }

}
