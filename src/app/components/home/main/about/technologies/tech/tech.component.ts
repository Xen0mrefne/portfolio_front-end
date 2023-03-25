import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tech } from 'src/app/model/tech';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent {
  @Output() onEdit: EventEmitter<Tech> = new EventEmitter();
  @Output() onDelete: EventEmitter<Tech> = new EventEmitter();
  @Input() isLogged!: boolean;
  @Input() tech!: Tech;

  showOptions: boolean = false;
  editing: boolean = false;
  deleting: boolean = false;

  toggleOptions(): void {
    this.showOptions = !this.showOptions
  }

  toggleEdit(): void {
    this.editing = !this.editing

    if(this.editing){
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }

  confirmEdit(tech: Tech): void {
    this.onEdit.emit(tech);
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
    this.onDelete.emit(this.tech);
    this.toggleDelete();
  }
}
