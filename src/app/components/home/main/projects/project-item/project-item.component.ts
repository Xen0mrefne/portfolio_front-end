import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent {
  @Output() onEdit: EventEmitter<Project> = new EventEmitter();
  @Output() onDelete: EventEmitter<Project> = new EventEmitter();
  @Input() project!: Project;
  @Input() isLogged!: boolean;

  editing: boolean = false;
  deleting: boolean = false;

  toggleEdit(): void {
    this.editing = !this.editing

    if(this.editing){
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }

  confirmEdit(project: Project): void {
    this.onEdit.emit(project);
    this.toggleEdit();
  }

  toggleDelete(): void {
    this.deleting = !this.deleting

    if(this.deleting){
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }

  confirmDelete(): void {
    this.onDelete.emit(this.project);
    this.toggleDelete();
  }
}
