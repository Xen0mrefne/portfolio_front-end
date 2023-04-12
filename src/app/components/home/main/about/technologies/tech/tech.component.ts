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
  @Input() isAdmin!: boolean;
  @Input() tech!: Tech;
  @Input() index!: number;

  showOptions: boolean = false;

  toggleOptions(): void {
    this.showOptions = !this.showOptions
  }


  editTech(): void {
    this.onEdit.emit(this.tech);
  }

  deleteTech(): void {
    this.onDelete.emit(this.tech);
  }
}
