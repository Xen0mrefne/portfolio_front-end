import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Person } from '../model/person.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url = "http://localhost:8080/persons"
  constructor(private http: HttpClient) { }

    public getPersona(): Observable<Person> {
      return this.http.get<Person>(this.url + "/1")
    }

}
