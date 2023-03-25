import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Person } from '../model/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  personURL = "http://localhost:8080/persons"

  constructor(private httpClient: HttpClient) { }

    public getPersons(): Observable<Person[]> {
      this.httpClient.get<Person[]>(this.personURL).subscribe({next: data => {
        if (!data[0]) {
          const newPerson = new Person("First name", "Last name", "Title", "About me", "profileImage", "bannerImage")

          this.createPerson(newPerson).subscribe()
        }
      }})

      return this.httpClient.get<Person[]>(this.personURL)
    }

    public createPerson(person: Person): Observable<Person> {
      return this.httpClient.post<Person>(this.personURL, person)
    }

    public update(id: number, person: Person): Observable<any> {
      return this.httpClient.put<Person>(this.personURL + '/' + id, person)
    }
}
