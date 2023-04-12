import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url = environment.back_url

  constructor(private httpClient: HttpClient) { }

  public getAll(personId: number): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.url + "/persons/" + personId + "/projects")
  }

  public save(project: Project): Observable<any> {
    return this.httpClient.post<Project>(this.url + "/persons/" + project.personId + "/projects", project);
  }

  public update(id: number, project: Project): Observable<any> {
    return this.httpClient.put<Project>(this.url + "/projects/" + id, project)
  }

  public delete(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.url + "/projects/" + id);
  }
}
