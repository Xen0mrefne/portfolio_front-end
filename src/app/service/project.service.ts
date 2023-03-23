import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectURL = "http://localhost:8080/projects"

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.projectURL)
  }

  public save(project: Project): Observable<any> {
    return this.httpClient.post<Project>(this.projectURL, project);
  }

  public update(id: number, project: Project): Observable<any> {
    return this.httpClient.put<Project>(this.projectURL + '/' + id, project)
  }

  public delete(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.projectURL + '/' + id);
  }
}
