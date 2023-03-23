import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent {
  @Output() onEditClick: EventEmitter<any> = new EventEmitter();


  onClick(): void {
    this.onEditClick.emit();
  }
}
