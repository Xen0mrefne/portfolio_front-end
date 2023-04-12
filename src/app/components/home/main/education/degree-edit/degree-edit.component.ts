import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Degree } from 'src/app/model/degree';

@Component({
  selector: 'app-degree-edit',
  templateUrl: './degree-edit.component.html',
  styleUrls: ['./degree-edit.component.css']
})
export class DegreeEditComponent {
  @Output() onCancelEdit: EventEmitter<any>= new EventEmitter();
  @Output() onEdit: EventEmitter<Degree>= new EventEmitter();
  @Input() degree!: Degree;

  title!: string;
  institution!: string;
  startDate!: string;
  endDate?: string;
  finished!: boolean;

  ngOnInit(): void {
    this.title = this.degree.title;
    this.institution = this.degree.institution;
    this.finished = this.degree.finished;
    this.startDate = this.degree.startDate;
    this.endDate = this.degree.endDate;
  }

  closeModal(): void {
    this.onCancelEdit.emit();
  }

  onSubmit(): void {
    if (!this.finished) {
      this.endDate = undefined;
    }

    const updatedDegree = new Degree(
      this.title,
      this.institution,
      this.finished,
      this.startDate,
      this.endDate || "",
      this.degree.personId)
      
    updatedDegree.id = this.degree.id;

    this.onEdit.emit(updatedDegree)
  }
}
