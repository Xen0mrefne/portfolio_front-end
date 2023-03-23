import { Component, EventEmitter, Output } from '@angular/core';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent {
  @Output() onAdd: EventEmitter<Project> = new EventEmitter();
  @Output() onCancelAdd: EventEmitter<any> = new EventEmitter();

  name!: string;
  description!: string;
  dateCreated!: string;
  url!: string;

  onSubmit(): void {
    const newProject = new Project(this.name, this.description, this.dateCreated, this.url)
    this.onAdd.emit(newProject);
  }

  cancelAdd(): void {
    this.onCancelAdd.emit();
  }
}
