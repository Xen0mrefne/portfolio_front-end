import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url = environment.back_url

  constructor(private httpClient: HttpClient) { }

  public getAll(personId: number): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.url + "/persons/" + personId + "/skills")
  }

  public save(skill: Skill): Observable<any> {
    return this.httpClient.post<Skill>(this.url + "/persons/" + skill.personId + "/skills", skill);
  }

  public update(id: number, skill: Skill): Observable<any> {
    return this.httpClient.put<Skill>(this.url + "/skills/" + id, skill)
  }

  public delete(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.url + "/skills/" + id);
  }
}
