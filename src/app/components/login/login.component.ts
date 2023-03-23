import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/model/login-user';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLogged: boolean = false;
  isLogginFail: boolean = false;
  loginUser!: LoginUser;
  username!: string;
  password!: string;
  roles!: string[];
  err!: string;

  constructor(private tokenService:TokenService, private authService:AuthService, private router: Router) {}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUser = new LoginUser(this.username, this.password)

    this.authService.login(this.loginUser)
    .subscribe({next: data => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.username);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([""]) 
      }, error: err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.err = err.message;
      console.log(this.err)
    }})
  }

}
