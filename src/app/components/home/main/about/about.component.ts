import { Component, OnInit } from '@angular/core';
import { Tech } from 'src/app/model/tech';
import { TechType } from 'src/app/model/techType';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';
import { Person } from '../../../../model/person';
import { PERSON } from './person_placeholder';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  person: Person = PERSON

  isLogged: boolean = false;

  constructor (private personService:PersonService, private tokenService: TokenService) { }

  ngOnInit(): void {
      this.getPerson();

      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
  }

  getPerson(): void {
    this.personService.getPersons().subscribe({next: data => {
      this.person = data[0]
    }})
  }

  editPerson(): void {
  }

}
