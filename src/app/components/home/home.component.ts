import { Component } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  person!: Person;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    // setTimeout(() => {
      this.getPerson();
    // }, 10000)
  }

  getPerson(): void {
    this.personService.getPerson().subscribe({next: data => {
      this.personService.setPerson(data[0]);
    }});
  }

  ngOnDestroy(): void {
    document.body.style.overflowY = "auto"
  }

}
