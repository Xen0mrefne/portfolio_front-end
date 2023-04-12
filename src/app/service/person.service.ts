import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Person } from '../model/person';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url = environment.back_url + "/persons"

  person = new Subject<Person>();

  person$ = this.person.asObservable();

  constructor(private httpClient: HttpClient) { }

    public getPerson(): Observable<Person[]> {
      return this.httpClient.get<Person[]>(this.url)
    }

    public setPerson(person: Person) {
      this.person.next(person);
    }

    public createPerson(person: Person): Observable<Person> {
      return this.httpClient.post<Person>(this.url, person)
    }

    public update(id: number, person: Person): Observable<any> {
      return this.httpClient.put<Person>(this.url + '/' + id, person)
    }
}
