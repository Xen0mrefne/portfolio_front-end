import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tech } from '../model/tech';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  techURL = "http://localhost:8080/techs"

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Tech[]> {
    return this.httpClient.get<Tech[]>(this.techURL)
  }

  public save(tech: Tech): Observable<any> {
    return this.httpClient.post<Tech>(this.techURL, tech);
  }

  public update(id: number, tech: Tech): Observable<any> {
    return this.httpClient.put<Tech>(this.techURL + '/' + id, tech)
  }

  public delete(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.techURL + '/' + id);
  }
}
