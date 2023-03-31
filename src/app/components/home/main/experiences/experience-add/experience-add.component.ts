import { Component, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { Experience } from 'src/app/model/experience';

@Component({
  selector: 'app-experience-add',
  templateUrl: './experience-add.component.html',
  styleUrls: ['./experience-add.component.css']
})


export class ExperienceAddComponent {
  @Output() onCancelAdd: EventEmitter<any>= new EventEmitter();
  @Output() onAdd: EventEmitter<Experience>= new EventEmitter();


  

  position: string = "";
  company: string = "";
  description: string = "";


  onSubmit(): void {
    const experience = new Experience(this.position, this.company, this.description);

    this.onAdd.emit(experience)
  }

  cancelAdd(): void {
      this.onCancelAdd.emit();
  }
}
