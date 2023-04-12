import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent {
  @Output() onEditConfirm: EventEmitter<Project> = new EventEmitter();
  @Output() onCancelEdit: EventEmitter<any> = new EventEmitter();
  @Input() project!: Project;

  name!: string;
  description!: string;
  dateCreated!: string;
  url!: string;

  ngOnInit(): void {
    this.name = this.project.name;
    this.description = this.project.description;
    this.url = this.project.url;
  }

  cancelEdit(): void {
    this.onCancelEdit.emit();
  }

  onSubmit(): void {
    const updatedProject = new Project(this.name, this.description, this.url, this.project.personId)
    updatedProject.id = this.project.id

    this.onEditConfirm.emit(updatedProject);
  }

}
