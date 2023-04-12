import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tech } from '../model/tech';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  url = environment.back_url

  constructor(private httpClient: HttpClient) { }

  public getAll(personId: number): Observable<Tech[]> {
    return this.httpClient.get<Tech[]>(this.url + "/persons/" + personId + "/techs")
  }

  public save(tech: Tech): Observable<any> {
    return this.httpClient.post<Tech>(this.url + "/persons/" + tech.personId + "/techs", tech);
  }

  public update(id: number, tech: Tech): Observable<any> {
    return this.httpClient.put<Tech>(this.url + "/techs/" + id, tech)
  }

  public delete(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.url + "/techs/" + id);
  }
}
