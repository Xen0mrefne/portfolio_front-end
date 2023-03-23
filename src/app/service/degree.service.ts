import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Degree } from '../model/degree';

@Injectable({
  providedIn: 'root'
})
export class DegreeService {
  degreeURL = "http://localhost:8080/degrees"

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Degree[]> {
    return this.httpClient.get<Degree[]>(this.degreeURL)
  }

  public save(degree: Degree): Observable<any> {
    return this.httpClient.post<Degree>(this.degreeURL, degree);
  }

  public update(id: number, degree: Degree): Observable<any> {
    return this.httpClient.put<Degree>(this.degreeURL + '/' + id, degree)
  }

  public delete(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.degreeURL + '/' + id);
  }
  
}
