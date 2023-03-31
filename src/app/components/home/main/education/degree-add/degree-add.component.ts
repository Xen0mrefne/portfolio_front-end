import { Component, EventEmitter, Output } from '@angular/core';
import { Degree } from 'src/app/model/degree';

@Component({
  selector: 'app-degree-add',
  templateUrl: './degree-add.component.html',
  styleUrls: ['./degree-add.component.css']
})
export class DegreeAddComponent {
  @Output() onCancelAdd: EventEmitter<any> = new EventEmitter();
  @Output() onAdd: EventEmitter<Degree> = new EventEmitter();

  title: string = ""
  institution: string = ""
  startDate: string = ""
  endDate: string = ""

  onSubmit():void {
    if (this.endDate === ""){
      this.endDate = "Cursando"
    }
    const degree = new Degree(this.title, this.institution, this.startDate, this.endDate);

    this.onAdd.emit(degree)
  }

  cancelAdd():void {
    this.onCancelAdd.emit();
  }
}
