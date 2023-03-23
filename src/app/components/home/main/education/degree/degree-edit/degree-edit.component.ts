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

  ngOnInit(): void {
    this.title = this.degree.title;
    this.institution = this.degree.institution;
    this.startDate = this.degree.startDate;
    this.endDate = this.degree.endDate;
  }

  closeModal(): void {
    this.onCancelEdit.emit();
  }

  onSubmit(): void {
    const updatedDegree = new Degree(this.title, this.institution, this.startDate, this.endDate || "Cursando")
    updatedDegree.id = this.degree.id;

    this.onEdit.emit(updatedDegree)
  }
}
