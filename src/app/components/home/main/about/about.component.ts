import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/service/person.service';
import { Person } from '../../../../model/person.model';
import { PERSON } from './person_placeholder';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  person: Person = PERSON

  constructor (public personService:PersonService) { }

  ngOnInit(): void {
      // this.personService.getPersona().subscribe(data => {this.person = data})
  }

}
