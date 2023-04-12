import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Degree } from 'src/app/model/degree';

@Component({
  selector: 'app-degree-add',
  templateUrl: './degree-add.component.html',
  styleUrls: ['./degree-add.component.css']
})
export class DegreeAddComponent {
  @Output() onCancelAdd: EventEmitter<any> = new EventEmitter();
  @Output() onAdd: EventEmitter<Degree> = new EventEmitter();
  @Input() personId!: number;

  title: string = ""
  institution: string = ""
  startDate: string = ""
  endDate?: string;

  finished: boolean = true;

  onSubmit():void {
    if (!this.finished) {
      this.endDate = undefined;
    }

    const degree = new Degree(
      this.title,
      this.institution,
      this.finished,
      this.startDate,
      this.endDate || "",
      this.personId);

    this.onAdd.emit(degree)
  }

  cancelAdd():void {
    this.onCancelAdd.emit();
  }
}
