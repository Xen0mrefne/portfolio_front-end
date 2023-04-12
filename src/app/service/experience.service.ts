import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  url = environment.back_url

  constructor(private httpClient:HttpClient) { }

  public getAll(personId: number): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(this.url + "/persons/" + personId + "/experiences")
  }

  public save(experience: Experience): Observable<any> {
    return this.httpClient.post<Experience>(this.url + "/persons/" + experience.personId + "/experiences", experience);
  }

  public update(id: number, experience: Experience): Observable<any> {
    return this.httpClient.put<Experience>(this.url + "/experiences/" + id, experience)
  }

  public delete(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.url + "/experiences/" + id);
  }
}
