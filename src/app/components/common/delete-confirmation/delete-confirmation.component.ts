import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent {
  @Output() onCancelDelete: EventEmitter<any> = new EventEmitter();
  @Output() onConfirmDelete: EventEmitter<any> = new EventEmitter();

  confirmDelete(): void {
    this.onConfirmDelete.emit();
  }

  closeModal(): void {
    this.onCancelDelete.emit();
  }
}
