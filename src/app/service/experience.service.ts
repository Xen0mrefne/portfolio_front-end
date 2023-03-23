import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  expURL = "http://localhost:8080/experiences"

  constructor(private httpClient:HttpClient) { }

  public getAll(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(this.expURL)
  }

  public save(experience: Experience): Observable<any> {
    return this.httpClient.post<Experience>(this.expURL, experience);
  }

  public update(id: number, experience: Experience): Observable<any> {
    return this.httpClient.put<Experience>(this.expURL + '/' + id, experience)
  }

  public delete(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + '/' + id);
  }
}
