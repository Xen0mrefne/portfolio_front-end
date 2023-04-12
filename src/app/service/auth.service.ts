import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUser } from '../model/login-user';
import { NewUser } from '../model/new-user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = environment.back_url + "/auth/"

  constructor(private HttpClient: HttpClient) { }

  public createUser(newUser: NewUser): Observable<any> {
    return this.HttpClient.post<any>(this.authURL + "new", newUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDto> {
    return this.HttpClient.post<JwtDto>(this.authURL + "login", loginUser);
  }
}
