import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent {
  @Output() onConfirmEdit: EventEmitter<Person>= new EventEmitter();
  @Output() onCancelEdit: EventEmitter<any>= new EventEmitter();
  @Input() person!: Person;

  firstName!: string;
  lastName!: string;
  title!: string;
  about!: string;

  ngOnInit(): void {
    this.firstName = this.person.firstName;
    this.lastName = this.person.lastName;
    this.title = this.person.title;
    this.about = this.person.about;
  }

  onSubmit(): void {
    const updatedPerson = new Person(this.firstName, this.lastName, this.title, this.about, this.person.profileImage, this.person.bannerImage);
    updatedPerson.id = this.person.id;

    this.onConfirmEdit.emit(updatedPerson)
  }

  closeModal(): void {
    this.onCancelEdit.emit();
  }

}
