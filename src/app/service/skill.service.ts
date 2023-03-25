import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skillURL = "http://localhost:8080/skills"

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.skillURL)
  }

  public save(skill: Skill): Observable<any> {
    return this.httpClient.post<Skill>(this.skillURL, skill);
  }

  public update(id: number, skill: Skill): Observable<any> {
    return this.httpClient.put<Skill>(this.skillURL + '/' + id, skill)
  }

  public delete(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.skillURL + '/' + id);
  }
}
