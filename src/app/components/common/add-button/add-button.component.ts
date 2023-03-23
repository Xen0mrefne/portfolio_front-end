import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent {
  @Output() onAddClick: EventEmitter<any> = new EventEmitter();

  onClick(): void {
    this.onAddClick.emit();
  }
}
