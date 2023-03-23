import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent {
  @Output() onDeleteClick: EventEmitter<any> = new EventEmitter();

  onClick(): void {
    this.onDeleteClick.emit();
  }
}
