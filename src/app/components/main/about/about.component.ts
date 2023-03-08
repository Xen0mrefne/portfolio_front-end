import { Component } from '@angular/core';
import { Person } from './Person';
import { PERSON } from './person_placeholder';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  person: Person = PERSON;
}
