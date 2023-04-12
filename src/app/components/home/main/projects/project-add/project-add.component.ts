import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent {
  @Output() onAdd: EventEmitter<Project> = new EventEmitter();
  @Output() onCancelAdd: EventEmitter<any> = new EventEmitter();
  @Input() personId!: number;

  name!: string;
  description!: string;
  url!: string;

  onSubmit(): void {
    const newProject = new Project(this.name, this.description, this.url, this.personId)
    this.onAdd.emit(newProject);
  }

  cancelAdd(): void {
    this.onCancelAdd.emit();
  }
}
