import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Degree } from '../model/degree';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DegreeService {
  url = environment.back_url

  constructor(private httpClient: HttpClient) { }

  public getAll(personId: number): Observable<Degree[]> {
    return this.httpClient.get<Degree[]>(this.url + "/persons/" + personId + "/degrees")
  }

  public save(degree: Degree): Observable<any> {
    return this.httpClient.post<Degree>(this.url + "/persons/" + degree.personId + "/degrees", degree);
  }

  public update(id: number, degree: Degree): Observable<any> {
    return this.httpClient.put<Degree>(this.url + "/degrees/" + id, degree)
  }

  public delete(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.url + "/degrees/" + id);
  }
  
}
