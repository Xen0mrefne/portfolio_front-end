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
  @Input() isAdmin!: boolean;

  editProject(): void {
    this.onEdit.emit(this.project);
  }

  deleteProject(): void {
    this.onDelete.emit(this.project);
  }
}
